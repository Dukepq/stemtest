import { integer, pgTable, text, unique, uuid } from "drizzle-orm/pg-core";
import { Elections } from "./elections";

export const Statements = pgTable(
  "statements",
  {
    id: uuid("id").defaultRandom().primaryKey().unique(),
    index: integer("index").notNull(),
    statement: text("statement").notNull(),
    electionId: uuid("election_id")
      .references(() => Elections.id, { onDelete: "cascade" })
      .notNull(),
  },
  (t) => ({
    uniqueConstraint: unique().on(t.index, t.electionId),
  })
);
