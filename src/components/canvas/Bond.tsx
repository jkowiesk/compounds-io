// r3f make a cylinder that its first base its in position1 and second base its in position2

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  position1: THREE.Vector3;
  position2: THREE.Vector3;
};

export default function BondFC({ position1, position2 }: Props) {
  const bond = useRef<THREE.Mesh>(null);
  const height = position1.distanceTo(position2);

  useEffect(() => {
    if (bond.current) {
      const midpoint = position1.clone().lerp(position2, 0.5);
      bond.current.position.set(midpoint.x, midpoint.y, midpoint.z);

      const direction = position2.clone().sub(position1).normalize();
      bond.current.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction
      );
    }
  }, []);

  return (
    <>
      <mesh ref={bond}>
        <cylinderGeometry args={[0.1, 0.1, height, 8]} />
        <meshBasicMaterial color={0xaaaaaa} />
      </mesh>
    </>
  );
}
