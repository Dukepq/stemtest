"use client";

import { Statement } from "@/types";
import { createContext, useContext } from "react";

const StatementContext = createContext<Statement[] | null>(null);
export function StatementContextProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Statement[];
}) {
  return (
    <StatementContext.Provider value={value}>
      {children}
    </StatementContext.Provider>
  );
}

export function useStatementContext() {
  const ctx = useContext(StatementContext);
  if (!ctx) {
    throw new Error("Error: can only use context inside of a provider");
  }
  return ctx;
}
