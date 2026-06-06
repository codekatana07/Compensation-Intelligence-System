import "dotenv/config";

import {NormalizedLevel } from "@prisma/client";
import { prisma } from "../src/lib/prisma";
import crypto from "crypto";

const data = [
  ["Google", "Software Engineer", "L3", 140000, 15000, 25000],
  ["Google", "Software Engineer", "L4", 180000, 25000, 45000],
  ["Google", "Software Engineer", "L5", 220000, 35000, 70000],

  ["Amazon", "Software Engineer", "SDE1", 130000, 10000, 20000],
  ["Amazon", "Software Engineer", "SDE2", 170000, 20000, 40000],
  ["Amazon", "Software Engineer", "SDE3", 220000, 35000, 60000],

  ["Microsoft", "Software Engineer", "59", 120000, 10000, 15000],
  ["Microsoft", "Software Engineer", "60", 150000, 15000, 25000],
  ["Microsoft", "Software Engineer", "61", 180000, 20000, 40000],

  ["Uber", "Software Engineer", "L3", 160000, 15000, 35000],
  ["Uber", "Software Engineer", "L4", 210000, 25000, 60000],
  ["Uber", "Software Engineer", "L5", 260000, 35000, 90000],

  ["Atlassian", "Software Engineer", "P4", 150000, 15000, 25000],
  ["Atlassian", "Software Engineer", "P5", 190000, 25000, 50000],
  ["Atlassian", "Software Engineer", "P6", 240000, 35000, 80000],
] as const;

function getNormalizedLevel(
  level: string
): NormalizedLevel {
  const upper = level.toUpperCase();

  if (
    upper.includes("L3") ||
    upper.includes("SDE1") ||
    upper === "59"
  ) {
    return NormalizedLevel.ENTRY;
  }

  if (
    upper.includes("L4") ||
    upper.includes("SDE2") ||
    upper === "60" ||
    upper.includes("P4")
  ) {
    return NormalizedLevel.MID;
  }

  if (
    upper.includes("L5") ||
    upper.includes("SDE3") ||
    upper === "61" ||
    upper.includes("P5")
  ) {
    return NormalizedLevel.SENIOR;
  }

  return NormalizedLevel.STAFF;
}

function getLevelOrder(level: string): number {
  const map: Record<string, number> = {
    L3: 3,
    L4: 4,
    L5: 5,
    SDE1: 3,
    SDE2: 4,
    SDE3: 5,
    "59": 3,
    "60": 4,
    "61": 5,
    P4: 4,
    P5: 5,
    P6: 6,
  };

  return map[level] ?? 0;
}

async function main() {
  for (const row of data) {
    const companyName = row[0];
    const role = row[1];
    const level = row[2];
    const baseSalary = row[3];
    const bonus = row[4];
    const stockAnnual = row[5];

    const normalizedName =
      companyName.toLowerCase();

    const slug = normalizedName.replace(
      /\s+/g,
      "-"
    );

    const company = await prisma.company.upsert({
      where: {
        normalizedName,
      },
      update: {},
      create: {
        name: companyName,
        normalizedName,
        slug,
      },
    });

    const totalComp =
      baseSalary + bonus + stockAnnual;

    const submissionHash =
      crypto.randomUUID();

    await prisma.compensationEntry.create({
      data: {
        companyId: company.id,

        role,
        normalizedRole:
          role.toLowerCase(),

        level,
        normalizedLevel:
          getNormalizedLevel(level),

        levelOrder:
          getLevelOrder(level),

        baseSalary,
        bonus,
        stockAnnual,
        totalComp,

        submissionHash,
      },
    });
  }

  console.log("Seed completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });