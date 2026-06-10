// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const companyA = searchParams.get("companyA");
    const companyB = searchParams.get("companyB");

    const levelA = searchParams
      .get("levelA")
      ?.toUpperCase();

    const levelB = searchParams
      .get("levelB")
      ?.toUpperCase();

    if (
      !companyA ||
      !companyB ||
      !levelA ||
      !levelB
    ) {
      return NextResponse.json(
        {
          error:
            "companyA, companyB, levelA, levelB are required",
        },
        { status: 400 }
      );
    }

    const [dataA, dataB] = await Promise.all([
      prisma.compensationEntry.findMany({
        where: {
          company: {
            normalizedName:
              companyA.toLowerCase(),
          },
          normalizedLevel: levelA as any,
        },
        select: {
          totalComp: true,
        },
      }),

      prisma.compensationEntry.findMany({
        where: {
          company: {
            normalizedName:
              companyB.toLowerCase(),
          },
          normalizedLevel: levelB as any,
        },
        select: {
          totalComp: true,
        },
      }),
    ]);

    const averageA =
      dataA.length === 0
        ? 0
        : Math.round(
            dataA.reduce(
              (sum, item) =>
                sum + Number(item.totalComp),
              0
            ) / dataA.length
          );

    const averageB =
    
      dataB.length === 0
        ? 0
        : Math.round(
            dataB.reduce(
              (sum, item) =>
                sum + Number(item.totalComp),
              0
            ) / dataB.length
          );

    return NextResponse.json({
      companyA: {
        name: companyA,
        level: levelA,
        averageTC: averageA,
      },

      companyB: {
        name: companyB,
        level: levelB,
        averageTC: averageB,
      },

      difference:
        Math.abs(averageA - averageB),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Comparison failed",
      },
      { status: 500 }
    );
  }
}