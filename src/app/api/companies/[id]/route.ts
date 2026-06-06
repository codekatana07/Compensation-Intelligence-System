import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const company = await prisma.company.findUnique({
      where: {
        id,
      },
    });

    if (!company) {
      return NextResponse.json(
        { error: "Company not found" },
        { status: 404 }
      );
    }

    const entries = await prisma.compensationEntry.findMany({
      where: {
        companyId: id,
      },
      select: {
        totalComp: true,
        baseSalary: true,
        normalizedLevel: true,
      },
    });

    const totalEntries = entries.length;

    if (totalEntries === 0) {
      return NextResponse.json({
        company: company.name,
        totalEntries: 0,
        averageTC: 0,
        averageBase: 0,
        levels: {},
      });
    }

    const averageTC =
      entries.reduce(
        (sum, entry) => sum + Number(entry.totalComp),
        0
      ) / totalEntries;

    const averageBase =
      entries.reduce(
        (sum, entry) => sum + Number(entry.baseSalary),
        0
      ) / totalEntries;

    const levels: Record<string, number> = {};

    entries.forEach((entry) => {
      levels[entry.normalizedLevel] =
        (levels[entry.normalizedLevel] || 0) + 1;
    });

    return NextResponse.json({
      company: company.name,
      totalEntries,
      averageTC: Math.round(averageTC),
      averageBase: Math.round(averageBase),
      levels,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch company analytics" },
      { status: 500 }
    );
  }
}