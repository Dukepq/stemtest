import "server-only";
import { ElectionTierEnumType, Elections } from "@/drizzle";
import { db } from "@/drizzle/db";
import { eq } from "drizzle-orm";

const electionsDAL = {
  query: {
    async getElections(tier?: ElectionTierEnumType) {
      const query = db.select().from(Elections);
      if (tier) {
        query.where(eq(Elections.tier, tier));
      }
      return await query;
    },
  },
  mutation: {},
};

export default electionsDAL;
