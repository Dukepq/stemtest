import "server-only";
import { Parties } from "@/drizzle";
import { db } from "@/drizzle/db";

const partiesDAL = {
  query: {
    async getParties() {
      const parties = await db.select().from(Parties);
      return parties;
    },
  },
  mutation: {},
};

export default partiesDAL;
