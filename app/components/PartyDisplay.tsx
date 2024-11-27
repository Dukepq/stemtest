import Image from "next/image";
import volt from "@/public/assets/logos/volt.svg";
import cdv from "@/public/assets/logos/cdv.svg";
import nva from "@/public/assets/logos/nva.svg";
import vooruit from "@/public/assets/logos/vooruit.svg";
import groen from "@/public/assets/logos/groen.png";
import pvda from "@/public/assets/logos/pvda.svg";
import ovld from "@/public/assets/logos/open-vld.svg";
import vooru from "@/public/assets/logos/vooru.png";
import vb from "@/public/assets/logos/vb.svg";
import { Plus } from "lucide-react";

export default function PartyDisplay() {
  return (
    <div className="w-full sm:w-fit grid gap-3 sm:gap-6 grid-cols-3 [&_img]:object-center [&_img]:w-20 [&_img]:min-w-20 sm:[&_img]:min-w-28 sm:[&_img]:w-28  [&_img]:max-h-8 [&_img]:object-contain [&>div]:grid [&>div]:place-content-center lg:motion-safe:animate-slideInFromLeft motion-safe:animate-slideUpAndFade">
      <div>
        <Image draggable="false" alt="cd&v" src={cdv} />
      </div>
      <div>
        <Image draggable="false" alt="nva" src={nva} />
      </div>
      <div>
        <Image draggable="false" alt="vooruit" src={vooruit} />
      </div>
      <div>
        <Image draggable="false" alt="vlaams belang" src={vb} />
      </div>
      <div>
        <Image draggable="false" alt="pvda" src={pvda} />
      </div>
      <div>
        <Image draggable="false" alt="groen" src={groen} />
      </div>
      <div>
        <Image draggable="false" alt="open vld" src={ovld} />
      </div>
      <div className="relative">
        <Image draggable="false" alt="volt" src={volt} />
      </div>
      <div className="relative">
        <Image draggable="false" alt="voorU" src={vooru} />
      </div>
    </div>
  );
}
