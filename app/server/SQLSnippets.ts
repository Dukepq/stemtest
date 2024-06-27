import "server-only";

import { sql } from "drizzle-orm";
import { Answers, Parties } from "@/drizzle";

export const aggregateAnswersSQL = () => {
  return sql<
    {
      answerId: string;
      name: string;
      inFavor: boolean | null;
      reason: string;
      partyColor: string;
      partyLogo: string;
    }[]
  >`
  jsonb_agg(
    CASE WHEN ${Answers.id} IS NOT NULL THEN
  jsonb_build_object(
    'answerId', ${Answers.id},
    'name', ${Answers.partyName},
    'inFavor', ${Answers.inFavor},
    'reason', ${Answers.reasoning},
    'partyColor', ${Parties.partyColor},
    'partyLogo', ${Parties.partyLogo}
  )
  END
)
  AS answers`;
};

export const aggregateSentimentSQL = () => {
  return sql<
    {
      answerId: string;
      name: string;
      inFavor: boolean | null;
      partyColor: string;
      partyLogo: string;
    }[]
  >`
  jsonb_agg(
    CASE WHEN ${Answers.id} IS NOT NULL THEN
  jsonb_build_object(
    'answerId', ${Answers.id},
    'name', ${Answers.partyName},
    'inFavor', ${Answers.inFavor},
    'partyColor', ${Parties.partyColor},
    'partyLogo', ${Parties.partyLogo}
  )
  END
)
  AS answers`;
};
