import { buttonOptions } from "./components/ui/Button";
import Link from "next/link";
import { cn } from "./lib/utils";
import PartyDisplay from "./components/PartyDisplay";

export default function Page() {
  return (
    <main className="px-3 max-w-screen-xl mx-auto">
      <section className="min-h-screen grid place-content-center">
        <div className="flex items-center flex-col-reverse lg:flex-row">
          <div className="lg:max-w-[65%] text-center lg:text-left text-wrap md:text-balance lg:pr-6">
            <h1 className="font-bold text-xl sm:text-2xl">
              De uitgebreide stemtest
            </h1>
            <p className="[&>span]:font-bold [&>span]:text-primary text-base [&>span]:text-lg text-wrap max-w-screen-md">
              In deze stemtest vergelijk je je antwoorden ook met die van{" "}
              <span>Volt</span> en <span>VoorU</span>!
            </p>
            <Link
              href="/stemtest"
              className={cn(
                buttonOptions({}),
                "block mt-3 py-1.5 w-full sm:w-fit sm:mx-auto lg:mx-0 text-base"
              )}
            >
              Doe de stemtest!
            </Link>
          </div>
          <div className="w-full h-[2px] lg:h-[120%] lg:w-[2px] bg-accent mb-2 mt-4 lg:my-6 rounded-full"></div>
          <div className="grid place-content-center overflow-hidden pl-6">
            <PartyDisplay />
          </div>
        </div>
      </section>
      <section className="[&_h2]:text-xl [&_h2]:font-semibold">
        <div className="flex gap-3 my-6">
          <div className="basis-1/2">
            <h2>Waarom deze stemtest?</h2>
            <p className="text-balance">
              In de originele stemtest vind je Volt en VoorU niet terug.
            </p>
            <p>
              De bedoeling van deze stemtest is dan ook om het eenvoudiger te
              maken ook Volt en VoorU te vergelijken met de traditionele
              partijen.
            </p>
            <p>
              Je ziet deze stemtest best als aanvullend, aangezien de resultaten
              anders berekend worden dan in de officiële stemtest.
            </p>
          </div>
          <div className="basis-1/2">
            <h2>Hoe werkt het?</h2>
            <p>
              De werking is eenvoudig, als jij en de partij beide{" "}
              <span className="italic font-semibold">eens</span> of{" "}
              <span className="italic font-semibold">oneens</span> hebben
              aangeduid, dan neemt de overeenkomst tussen jouw en die partij met
              een &quot;punt&quot; toe.
            </p>

            <p>
              In tegenstelling tot de officiële stemtest wordt de toename niet
              gewogen aan het belang dat de partij heeft voor de stelling.
            </p>
            <p className="text-sm italic">
              *Volt heeft op een vraag &quot;geen mening&quot; ingevuld, als jij
              hier ook &quot;geen mening&quot; aanduid telt dit niet als een
              &quot;punt&quot;.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
