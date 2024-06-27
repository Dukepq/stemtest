import "server-only";
import {
  Answers,
  ElectionTierEnumType,
  Elections,
  Parties,
  Statements,
} from "@/drizzle";
import { db } from "@/drizzle/db";
import { and, eq } from "drizzle-orm";
import { aggregateAnswersSQL, aggregateSentimentSQL } from "../SQLSnippets";
import { shuffleArray } from "@/app/lib/utils";

const statementsDAL = {
  query: {
    async getElectionStatements(
      year: number,
      electionTier: ElectionTierEnumType
    ) {
      const statements = await db
        .select({
          id: Statements.id,
          statement: Statements.statement,
          index: Statements.index,
          electionId: Statements.electionId,
        })
        .from(Statements)
        .leftJoin(Elections, eq(Statements.electionId, Elections.id))
        .where(and(eq(Elections.year, year), eq(Elections.tier, electionTier)));
      return statements;
    },
    async getElectionStatementsWithAnswers(
      year: number,
      tier: ElectionTierEnumType
    ) {
      const statements = await db
        .select({
          id: Statements.id,
          statement: Statements.statement,
          index: Statements.index,
          answers: aggregateAnswersSQL(),
        })
        .from(Statements)
        .leftJoin(Elections, eq(Statements.electionId, Elections.id))
        .leftJoin(Answers, eq(Answers.questionId, Statements.id))
        .leftJoin(Parties, eq(Parties.name, Answers.partyName))
        .where(and(eq(Elections.year, year), eq(Elections.tier, tier)))
        .groupBy(Statements.id, Elections.id)
        .orderBy(Statements.index);

      // TODO: modify query to randomise instead of using this...
      const shuffledAnswersStatements: typeof statements = [];
      for (const statement of statements) {
        const shuffledAnswers = shuffleArray(statement.answers);
        shuffledAnswersStatements.push({
          ...statement,
          answers: shuffledAnswers,
        });
      }
      return shuffledAnswersStatements;
    },
    async getElectionStatementsWithSentiment(
      year: number,
      tier: ElectionTierEnumType
    ) {
      const statements = await db
        .select({
          id: Statements.id,
          statement: Statements.statement,
          index: Statements.index,
          answers: aggregateSentimentSQL(),
        })
        .from(Statements)
        .leftJoin(Elections, eq(Statements.electionId, Elections.id))
        .leftJoin(Answers, eq(Answers.questionId, Statements.id))
        .leftJoin(Parties, eq(Parties.name, Answers.partyName))
        .where(and(eq(Elections.year, year), eq(Elections.tier, tier)))
        .groupBy(Statements.id, Elections.id)
        .orderBy(Statements.index);

      return statements;
    },
  },
  mutation: {},
};

export default statementsDAL;
