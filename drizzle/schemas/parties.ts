import { pgTable, varchar } from "drizzle-orm/pg-core";

export const Parties = pgTable("parties", {
  name: varchar("name", { length: 50 }).primaryKey().notNull().unique(),
  partyColor: varchar("party_color", { length: 50 }).notNull(),
  partyLogo: varchar("party_logo").notNull(),
});

export type Party = typeof Parties.$inferSelect;
