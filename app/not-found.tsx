import Link from "next/link";
import { Button, buttonOptions } from "./components/ui/Button";
import { cn } from "./lib/utils";

export default function NotFound() {
  return (
    <div className="h-screen grid place-content-center bg-secondary">
      <div>
        <h1 className="text-2xl font-semibold">
          Helaas, we kunnen de gevraagde pagina niet vinden.
        </h1>
        <Link
          href={"/"}
          className={cn(buttonOptions({ size: "lg" }), "inline-block mt-3")}
        >
          Terug naar start
        </Link>
      </div>
    </div>
  );
}
