import { integer, pgEnum, pgTable, unique, uuid } from "drizzle-orm/pg-core";

export const ElectionTierEnum = pgEnum("election_tiers", [
  "federal",
  "regional",
  "european",
  "mix",
]);
export type ElectionTierEnumType =
  (typeof ElectionTierEnum)["enumValues"][number];

export const Elections = pgTable(
  "elections",
  {
    id: uuid("id").defaultRandom().primaryKey().unique(),
    year: integer("year").notNull(),
    tier: ElectionTierEnum("tier").notNull(),
  },
  (t) => ({
    uniqueConstraint: unique().on(t.tier, t.year),
  })
);
