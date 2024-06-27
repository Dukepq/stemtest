import { Opinion, Statement, StatementWithoutReasonedAnswer } from "@/types";

export default function calculateAlignment(
  userAnswers: { id: string; answer: Opinion }[],
  statementsWithPartyAnswers: Pick<
    StatementWithoutReasonedAnswer,
    "id" | "answers"
  >[]
) {
  const alignment: Record<string, number> = {};

  for (const statement of statementsWithPartyAnswers) {
    const userOpinion = userAnswers.find(
      (userAnswer) => userAnswer.id === statement.id
    );
    if (!userOpinion || userOpinion.answer === "no-opinion") continue;

    const matchedAnswers = matchPartyStatementAnswersToUserAnswer(
      statement.answers,
      userOpinion.answer
    );

    for (const matchedAnswer of matchedAnswers) {
      const { agree, party } = matchedAnswer;
      if (typeof alignment[party] !== "number") {
        alignment[party] = 0;
      }
      if (agree) alignment[party]++;
    }
  }

  return alignment;
}

export function alignmentsToArray(
  alignments: Record<string, number>,
  statementCount: number
) {
  const alignmentArray: {
    alignmentFraction: string;
    alignment: number;
    party: string;
  }[] = [];
  for (const party in alignments) {
    const alignment = alignments[party];
    alignmentArray.push({
      alignmentFraction: `${alignment}/${statementCount}`,
      alignment: alignment / statementCount,
      party,
    });
  }

  return alignmentArray;
}

function matchPartyStatementAnswersToUserAnswer(
  answers: StatementWithoutReasonedAnswer["answers"],
  userOpinion: Opinion
) {
  const agreementArray: { party: string; agree: boolean }[] = [];
  for (const answer of answers) {
    const userAgrees = userOpinion === "agree";
    if (answer.inFavor === userAgrees) {
      agreementArray.push({ party: answer.name, agree: true });
    } else {
      agreementArray.push({ party: answer.name, agree: false });
    }
  }
  return agreementArray;
}
