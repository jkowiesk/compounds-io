import Combo from "@/components/dom/Combo";
import CompoundInfo from "@/components/dom/CompoundInfo";
import HomeContent from "@/components/dom/HomeContent";
import { Camera, MoleculeID } from "@/lib/types";

export default function Page() {
  return (
    <div className="w-screen h-screen pt-24 grid grid-rows-[30vh_1fr] grid-cols-3 bg-[#16161a]">
      <HomeContent />
    </div>
  );
}
