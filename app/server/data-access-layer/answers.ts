import {
  Answers,
  ElectionTierEnumType,
  Elections,
  Statements,
} from "@/drizzle";
import { db } from "@/drizzle/db";
import { and, eq } from "drizzle-orm";

const answersDAL = {
  query: {
    async getStatementAnswers(statementId: string) {
      const answers = await db
        .select()
        .from(Answers)
        .where(eq(Answers.questionId, statementId));
      return answers;
    },
    async getStatementOpinion(statementId: string) {
      const answers = await db
        .select({
          name: Answers.partyName,
          inFavor: Answers.inFavor,
        })
        .from(Answers)
        .where(eq(Answers.questionId, statementId));
      return answers;
    },
  },
  mutation: {},
};

export default answersDAL;
