import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { QuestionnaireAnswersProvider } from "./context/QuestionnaireContext";
import { StatementContextProvider } from "./context/StatementContext";
import DAL from "./server/data-access-layer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Stemtest",
  description:
    "Een interactieve stemtest die kleine en opkomende partijen mee opneemt.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const statements =
    await DAL.query.statements.getElectionStatementsWithAnswers(2024, "mix");
  return (
    <html lang="en">
      <StatementContextProvider value={statements}>
        <QuestionnaireAnswersProvider questionnaireLength={statements.length}>
          <body className={poppins.className}>{children}</body>
        </QuestionnaireAnswersProvider>
      </StatementContextProvider>
    </html>
  );
}
