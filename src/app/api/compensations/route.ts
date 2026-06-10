// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { CompensationSchema } from "@/lib/validation";

import {
  normalizeCompanyName,
  normalizeRole,
  normalizeLevel,
  calculateTotalComp,
  buildSubmissionHash,
} from "@/lib/normalizers";

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const parsed =
      CompensationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    const data = parsed.data;

    const normalizedCompany =
      normalizeCompanyName(
        data.company
      );

    const slug = normalizedCompany
      .replace(/\s+/g, "-");

    let company =
      await prisma.company.findUnique({
        where: {
          normalizedName:
            normalizedCompany,
        },
      });

    if (!company) {
      company =
        await prisma.company.create({
          data: {
            name: data.company,
            normalizedName:
              normalizedCompany,
            slug,
          },
        });
    }

    const normalizedRole =
      normalizeRole(data.role);

    const levelData =
      normalizeLevel(data.level);

    const totalComp =
      calculateTotalComp(
        data.baseSalary,
        data.bonus,
        data.stockAnnual
      );

    const fingerprint =
      [
        company.id,
        normalizedRole,
        levelData.normalizedLevel,
        data.country,
        data.state ?? "",
        data.city ?? "",
        data.baseSalary,
        data.bonus,
        data.stockAnnual,
      ].join("|");

    const submissionHash =
      buildSubmissionHash(
        fingerprint
      );

    const duplicate =
      await prisma.compensationEntry.findUnique(
        {
          where: {
            submissionHash,
          },
        }
      );

    if (duplicate) {
      return NextResponse.json(
        {
          error:
            "Duplicate compensation submission",
        },
        {
          status: 409,
        }
      );
    }

    const entry =
      await prisma.compensationEntry.create(
        {
          data: {
            companyId:
              company.id,

            role: data.role,
            normalizedRole,

            level: data.level,
            normalizedLevel:
              levelData.normalizedLevel,

            levelOrder:
              levelData.levelOrder,

            city:
              data.city,
            state:
              data.state,
            country:
              data.country,

            workMode:
              data.workMode,

            currency:
              data.currency,

            baseSalary:
              data.baseSalary,

            bonus:
              data.bonus,

            stockAnnual:
              data.stockAnnual,

            totalComp,

            submissionHash,

            yearsExperience:
              data.yearsExperience,

            yearsAtCompany:
              data.yearsAtCompany,
          },
        }
      );

    return NextResponse.json(
      {
        success: true,
        data: entry,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(
  request: Request
) {
  try {
    const { searchParams } =
      new URL(request.url);

    const company =
      searchParams.get("company");

    const role =
      searchParams.get("role");

    const level =
      searchParams.get("level");

    const minTC =
      searchParams.get("minTC");

    const maxTC =
      searchParams.get("maxTC");

    const location =
  searchParams.get("location");

    const where: any = {};

    if (company) {
      where.company = {
        normalizedName:
          normalizeCompanyName(
            company
          ),
      };
    }

    if (role) {
      where.normalizedRole =
        normalizeRole(role);
    }

    if (level) {
      where.normalizedLevel =
        normalizeLevel(level)
          .normalizedLevel;
    }

    if (location) {
  where.OR = [
    {
      city: {
        contains: location,
        mode: "insensitive",
      },
    },
    {
      state: {
        contains: location,
        mode: "insensitive",
      },
    },
    {
      country: {
        contains: location,
        mode: "insensitive",
      },
    },
  ];
}

    if (minTC || maxTC) {
      where.totalComp = {};

      if (minTC) {
        where.totalComp.gte =
          Number(minTC);
      }

      if (maxTC) {
        where.totalComp.lte =
          Number(maxTC);
      }
    }

    const results =
      await prisma.compensationEntry.findMany(
        {
          where,

          include: {
            company: true,
          },

          orderBy: {
            totalComp: "desc",
          },
        }
      );

    return NextResponse.json({
      count:
        results.length,
      data: results,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}