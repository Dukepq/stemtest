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
  title: {
    default: "De Stemtest",
    template: "%s - De Stemtest",
  },
  description:
    "Doe de interactieve stemtest die kleinere partijen mee opneemt en kom te weten met welke partij jij het meest overeen komt.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const statements =
    await DAL.query.statements.getElectionStatementsWithAnswers(2024, "mix");
  return (
    <html lang="nl">
      <StatementContextProvider value={statements}>
        <QuestionnaireAnswersProvider questionnaireLength={statements.length}>
          <body className={poppins.className}>{children}</body>
        </QuestionnaireAnswersProvider>
      </StatementContextProvider>
    </html>
  );
}
