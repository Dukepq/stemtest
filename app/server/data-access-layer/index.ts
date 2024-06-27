import "server-only";
import answersDAL from "./answers";
import partiesDAL from "./parties";
import statementsDAL from "./statements";
import electionsDAL from "./elections";

const DAL = {
  query: {
    answers: answersDAL.query,
    parties: partiesDAL.query,
    statements: statementsDAL.query,
    elections: electionsDAL.query,
  },
  mutation: {
    answers: answersDAL.mutation,
    parties: partiesDAL.mutation,
    statements: statementsDAL.mutation,
    elections: electionsDAL.mutation,
  },
};

export default DAL;
