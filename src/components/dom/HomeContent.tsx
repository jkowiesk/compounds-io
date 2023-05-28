"use client";
import { useState } from "react";
import Combo from "./Combo";
import CompoundInfo from "./CompoundInfo";
import { Camera, MoleculeID } from "@/lib/types";
import Frame from "./Frame";
import Scene from "../canvas/Scene";

export default function HomeContent() {
  const [camera, setCamera] = useState<Camera>({
    id: 0,
    name: "perspective",
    display: "Perspective",
  });
  const [selected, setSelected] = useState<MoleculeID>({
    id: "",
    common_name: "",
  });

  return (
    <>
      <div className="w-full col-span-3 from-black to-background bg-gradient-to-b grid place-items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-headline">Search...</h1>
          <Combo selected={selected} onSelect={setSelected} />
        </div>
      </div>
      <CompoundInfo id={selected.id} />
      <div className="z-0 w-full h-full overflow-x-hidden border-t-8 border-l-8 border-tl-8 col-span-2 rounded-tl-3xl flex-[2_1_0%] border-purple-secondary bg-background">
        <Scene camera={camera} id={selected.id} />
      </div>
      <Frame camera={camera} setCamera={setCamera} />
    </>
  );
}
