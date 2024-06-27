import { boolean, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { Parties } from "./parties";
import { Statements } from "./statements";

export const Answers = pgTable("answers", {
  id: uuid("id").primaryKey().defaultRandom().unique(),
  inFavor: boolean("in_favor"),
  reasoning: text("reasoning").notNull(),
  questionId: uuid("question_id")
    .references(() => Statements.id, { onDelete: "cascade" })
    .notNull(),
  partyName: varchar("party_name", { length: 50 })
    .references(() => Parties.name, { onDelete: "cascade" })
    .notNull(),
});
