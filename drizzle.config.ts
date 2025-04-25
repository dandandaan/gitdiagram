import { type Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL || "postgresql://postgres:Av1A1Kj__eXVRNnq@localhost:5432/gitdiagram",
  },
  tablesFilter: ["gitdiagram_*"],
} satisfies Config;
