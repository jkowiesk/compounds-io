// Description: This is main stage component. It contains all the elements of the scene. It stores 3d molecules and lights.
import { Molecule } from "@/lib/types";
import Atom from "./Atom";
import BondFC from "./Bond";
import * as THREE from "three";
import { MutableRefObject, useRef } from "react";
import { getMolecule } from "@/lib/firebase";
import useSWR from "swr";

type Props = {
  id: string;
};

export default function Stage({ id }: Props) {
  // remove from atoms symbol property
  const moleculeRef = useRef<THREE.Group>(null);

  const { data: molecule, error } = useSWR(id, getMolecule);
  const { atoms, bonds } = molecule || { atoms: [], bonds: [] };

  if (!molecule) {
    return <></>;
  }

  return (
    <>
      <group ref={moleculeRef}>
        {atoms.map(({ symbol, position }, idx) => (
          <Atom key={idx} position={position} symbol={symbol} />
        ))}
        {bonds.map(({ atom1Idx, atom2Idx }, idx) => {
          const position1 = new THREE.Vector3(...atoms[atom1Idx].position);
          const position2 = new THREE.Vector3(...atoms[atom2Idx].position);

          return (
            <BondFC key={idx} position1={position1} position2={position2} />
          );
        })}
      </group>
    </>
  );
}
