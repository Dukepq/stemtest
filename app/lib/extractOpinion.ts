import { AnswerSpecifics } from "@/types";

export const extractOpinions = (answers: AnswerSpecifics[]) => {
  const agreements: AnswerSpecifics[] = [];
  const disagreements: AnswerSpecifics[] = [];
  const abstentions: AnswerSpecifics[] = [];

  for (const answer of answers) {
    switch (answer.inFavor) {
      case true:
        agreements.push(answer);
        break;
      case false:
        disagreements.push(answer);
        break;
      default:
        abstentions.push(answer);
    }
  }
  return { agreements, disagreements, abstentions };
};
