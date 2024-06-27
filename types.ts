import { Party } from "./drizzle";

export type Opinion = "agree" | "disagree" | "no-opinion";

export type QuestionnaireAnswer = { id: string; answer: Opinion };

export type PartyAnswer = {
  answerId: string;
  inFavor: boolean | null;
  reason: string;
} & Party;

type StatementWithoutAnswers = {
  id: string;
  statement: string;
  index: number;
};

export type Statement = {
  answers: PartyAnswer[];
} & StatementWithoutAnswers;

export type StatementWithoutReasonedAnswer = {
  answers: Omit<PartyAnswer, "reason">[];
} & StatementWithoutAnswers;

export type PartyAlignmentResult = {
  party: string;
  partyColor: string;
  partyLogo: string;
  alignment: number;
};

export type AnswerSpecifics = Pick<
  Statement["answers"][number],
  "partyLogo" | "inFavor" | "reason" | "name"
>;
