"use client";
import { useEffect, useState } from "react";
import { Jsme } from "@/lib/jsme-react/index";

export const JsmeFC = () => {
  return (
    <>
      <Jsme
        height="300px"
        width="600px"
        smiles="CC=O"
        onChange={(smiles: any) => {
          console.log(smiles);
        }}
      />
    </>
  );
};
