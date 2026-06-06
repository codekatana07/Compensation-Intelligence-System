import { z } from "zod";

export const CompensationSchema = z.object({
  company: z.string().min(1),

  role: z.string().min(1),

  level: z.string().min(1),

  city: z.string().optional(),

  state: z.string().optional(),

  country: z.string().default("US"),

  workMode: z.enum(["ONSITE", "HYBRID", "REMOTE"]).default("ONSITE"),

  currency: z.string().default("USD"),

  baseSalary: z.number().positive(),

  bonus: z.number().min(0).default(0),

  stockAnnual: z.number().min(0).default(0),

  yearsExperience: z.number().min(0).optional(),

  yearsAtCompany: z.number().min(0).optional(),
});

export type CompensationInput =
  z.infer<typeof CompensationSchema>;