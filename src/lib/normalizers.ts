import crypto from "crypto";

export function normalizeCompanyName(
  company: string
): string {
  return company
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(
      /\b(inc|llc|corp|ltd|co)\b/g,
      ""
    )
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeRole(
  role: string
): string {
  const value = role
    .toLowerCase()
    .trim();

  if (
    value.includes("sde") ||
    value.includes("software engineer") ||
    value.includes("backend engineer") ||
    value.includes("backend swe")
  ) {
    return "Software Engineer";
  }

  if (
    value.includes("ml engineer") ||
    value.includes("machine learning engineer")
  ) {
    return "ML Engineer";
  }

  return role.trim();
}
// export function normalizeRole(
//   role: string
// ): string {
//   const map: Record<string, string> = {
//     "software engineer": "Software Engineer",
//     "backend swe": "Software Engineer",
//     "backend engineer": "Software Engineer",
//     "sde": "Software Engineer",
//     "sde i": "Software Engineer",
//     "sde ii": "Software Engineer",

//     "ml engineer": "ML Engineer",
//     "machine learning engineer":
//       "ML Engineer",
//   };

//   const key = role
//     .toLowerCase()
//     .trim();

//   return map[key] ?? role.trim();
// }

export function normalizeLevel(
  level: string
) {
  const map: Record<
    string,
    {
      normalizedLevel:
        | "INTERN"
        | "ENTRY"
        | "MID"
        | "SENIOR"
        | "STAFF"
        | "PRINCIPAL"
        | "DISTINGUISHED";
      levelOrder: number;
    }
  > = {
    l3: {
      normalizedLevel: "ENTRY",
      levelOrder: 2,
    },
    l4: {
      normalizedLevel: "MID",
      levelOrder: 3,
    },
    l5: {
      normalizedLevel: "SENIOR",
      levelOrder: 4,
    },
    l6: {
      normalizedLevel: "STAFF",
      levelOrder: 5,
    },
    "sde-1": {
      normalizedLevel: "ENTRY",
      levelOrder: 2,
    },
    "sde-2": {
      normalizedLevel: "MID",
      levelOrder: 3,
    },
    "sde-3": {
      normalizedLevel: "SENIOR",
      levelOrder: 4,
    },
  };

  return (
    map[level.toLowerCase()] ?? {
      normalizedLevel: "MID",
      levelOrder: 3,
    }
  );
}

export function calculateTotalComp(
  baseSalary: number,
  bonus: number,
  stockAnnual: number
) {
  return (
    baseSalary +
    bonus +
    stockAnnual
  );
}

export function buildSubmissionHash(
  data: string
) {
  return crypto
    .createHash("sha256")
    .update(data)
    .digest("hex");
}