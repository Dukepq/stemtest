import Image from "next/image";
import voorU from "@/public/assets/logos/vooru.png";
import volt from "@/public/assets/logos/volt.svg";
import nva from "@/public/assets/logos/nva.svg";
import vooruit from "@/public/assets/logos/vooruit.svg";
import vb from "@/public/assets/logos/vb.svg";
import groen from "@/public/assets/logos/groen.png";
import ovld from "@/public/assets/logos/open-vld.svg";
import pvda from "@/public/assets/logos/pvda.svg";
import cdv from "@/public/assets/logos/cdv.svg";

const ICON_HEIGHT = 40;

export default function Parties() {
  return (
    <div className="flex justify-center my-12 gap-10">
      <Image height={ICON_HEIGHT} src={nva} alt="NVA" />
      <Image height={ICON_HEIGHT} src={vooruit} alt="Vooruit" />
      <Image height={ICON_HEIGHT} src={volt} alt="Volt" />
      <Image height={ICON_HEIGHT} src={vb} alt="Vlaams Belang" />
      <Image height={ICON_HEIGHT} src={voorU} alt="VoorU" />
      <Image height={ICON_HEIGHT} src={pvda} alt="PVDA" />
      <Image height={ICON_HEIGHT} src={groen} alt="Groen" />
      <Image height={ICON_HEIGHT} src={ovld} alt="Open VLD" />
      <Image height={ICON_HEIGHT} src={cdv} alt="CD&V" />
    </div>
  );
}
