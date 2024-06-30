import Questionnaire from "./components/_questionnaire/Questionnaire";
import InfoWidget from "./components/ui/InfoWidget";
import ResetTest from "./components/ResetTest";

export default async function Page() {
  return (
    <main className="max-w-screen-xl mx-auto py-2 md:py-3 px-2">
      <ResetTest />
      <InfoWidget className="text-sm drop-shadow-md md:text-base fixed bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 bg-secondary motion-safe:animate-slideUpAndFadeAbsoluteEl" />
      <Questionnaire />
    </main>
  );
}
