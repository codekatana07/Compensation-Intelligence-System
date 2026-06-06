import "dotenv/config";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

console.log("Client created successfully");