import DAL from "@/app/server/data-access-layer";
import ResultsWrapper from "./_components/ResultsWrapper";
import EditAnswers from "./_components/EditAnswers";
import { ObservingResultsProvider } from "@/app/context/ObservingResultsContext";
import HoveringResults from "./_components/HoveringResults";
import { Pencil } from "lucide-react";
import { BlobCheck } from "@/app/components/ui/Icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resultaten",
  description: "Vergelijk uw antwoorden met die van de partijen!",
  robots: {
    index: false,
  },
};

export default async function Page() {
  const parties = await DAL.query.parties.getParties();
  return (
    <ObservingResultsProvider>
      <main className="max-w-screen-xl mx-auto md:px-3 md:py-1.5">
        <HoveringResults parties={parties} />
        <div className="flex justify-center">
          <div
            style={{ overflowAnchor: "none" }}
            className="w-full bg-secondary/100 py-6 px-9 md:rounded-md"
          >
            <div className="text-center mb-3">
              <div className="flex justify-center gap-3 items-center">
                <h2 className="font-bold text-2xl text-primary">Resultaten</h2>
                <BlobCheck className="size-5" />
              </div>
              <p>
                Hier zie je met welke partijen je antwoorden het meest (en
                minst) overeen komen.
              </p>
            </div>
            <hr className="py-3 text-primary" />
            <ResultsWrapper parties={parties} />
          </div>
        </div>
        <div className="bg-secondary mb-3">
          <div className="flex justify-center gap-3 items-center p-3 mt-3 bg-accent/10 font-semibold md:rounded-t-md">
            <Pencil size={23} />
            <h2 className="text-lg">Pas je antwoorden aan</h2>
          </div>
          <EditAnswers />
        </div>
      </main>
    </ObservingResultsProvider>
  );
}
