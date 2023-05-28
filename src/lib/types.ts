export type Atom = {
  symbol: string;
  position: [number, number, number];
};

export type AtomInfo = {
  radius: number;
  color: string;
};

export type Bond = {
  atom1Idx: number;
  atom2Idx: number;
  order: number;
};

export type Molecule = {
  atoms: Atom[];
  bonds: Bond[];
  common_name: String;
  inchi: String;
  ph: String;
  formula: String;
  weight: String;
};

export type MoleculeID = {
  id: string;
  common_name: string;
};

export type Camera = {
  id: number;
  name: "orthographic" | "perspective";
  display: string;
};
