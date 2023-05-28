"use client";
import { ATOMS } from "@/lib/atoms";
import { AtomInfo } from "@/lib/types";

type Props = {
  position: [number, number, number];
  symbol: string;
};

export default function Atom({ position, symbol }: Props) {
  const { radius, color }: AtomInfo = ATOMS.get(symbol)!;

  return (
    <>
      <mesh position={position}>
        <sphereGeometry args={[radius * (4 / 5), 30, 30]} />
        <meshLambertMaterial color={color} />
      </mesh>
    </>
  );
}
