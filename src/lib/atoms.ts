// make a map of all atoms for showing in r3f

// make hashmap of all atoms for showing in r3f make radius and color in Jmol coloring
import { AtomInfo } from "./types";

export const ATOMS = new Map<string, AtomInfo>(
  Object.entries({
    H: {
      radius: 0.2,
      color: "#FFFFFF",
    },
    He: {
      radius: 0.4,
      color: "#D9FFFF",
    },
    Li: {
      radius: 0.82,
      color: "#CC80FF",
    },
    Be: {
      radius: 0.67,
      color: "#C2FF00",
    },
    B: {
      radius: 0.87,
      color: "#FFB5B5",
    },
    C: {
      radius: 0.67,
      color: "#909090",
    },
    N: {
      radius: 0.56,
      color: "#3050F8",
    },
    O: {
      radius: 0.48,
      color: "#FF0D0D",
    },
    F: {
      radius: 0.42,
      color: "#90E050",
    },
    Ne: {
      radius: 0.38,
      color: "#B3E3F5",
    },
    Na: {
      radius: 1.16,
      color: "#AB5CF2",
    },
    Mg: {
      radius: 0.72,
      color: "#8AFF00",
    },
    Al: {
      radius: 1.18,
      color: "#BFA6A6",
    },
    Si: {
      radius: 1.11,
      color: "#F0C8A0",
    },
    P: {
      radius: 0.98,
      color: "#FF8000",
    },
    S: {
      radius: 0.88,
      color: "#FFFF30",
    },
    Cl: {
      radius: 0.79,
      color: "#1FF01F",
    },
    Ar: {
      radius: 0.71,
      color: "#80D1E3",
    },
    K: {
      radius: 1.52,
      color: "#8F40D4",
    },
    Ca: {
      radius: 1.12,
      color: "#3DFF00",
    },
    Sc: {
      radius: 1.18,
      color: "#E6E6E6",
    },
    Ti: {
      radius: 1.56,
      color: "#BFC2C7",
    },
    V: {
      radius: 1.25,
      color: "#A6A6AB",
    },
    Cr: {
      radius: 1.27,
      color: "#8A99C7",
    },
    Mn: {
      radius: 1.39,
      color: "#9C7AC7",
    },
    Fe: {
      radius: 1.25,
      color: "#E06633",
    },
    Co: {
      radius: 1.26,
      color: "#F090A0",
    },
    Ni: {
      radius: 1.21,
      color: "#50D050",
    },
    Cu: {
      radius: 1.38,
      color: "#C88033",
    },
    Zn: {
      radius: 1.31,
      color: "#7D80B0",
    },
    Ga: {
      radius: 1.26,
      color: "#C28F8F",
    },
    Ge: {
      radius: 1.22,
      color: "#668F8F",
    },
    As: {
      radius: 1.21,
      color: "#BD80E3",
    },
    Se: {
      radius: 1.17,
      color: "#FFA100",
    },
    Br: {
      radius: 1.14,
      color: "#A62929",
    },
    Kr: {
      radius: 1.03,
      color: "#5CB8D1",
    },
    Rb: {
      radius: 1.66,
      color: "#702EB0",
    },
    Sr: {
      radius: 1.44,
      color: "#00FF00",
    },
    Y: {
      radius: 1.8,
      color: "#94FFFF",
    },
    Zr: {
      radius: 1.55,
      color: "#94E0E0",
    },
    Nb: {
      radius: 1.48,
      color: "#73C2C9",
    },
    Mo: {
      radius: 1.47,
      color: "#54B5B5",
    },
    Tc: {
      radius: 1.35,
      color: "#3B9E9E",
    },
    Ru: {
      radius: 1.46,
      color: "#248F8F",
    },
    Rh: {
      radius: 1.42,
      color: "#0A7D8C",
    },
    Pd: {
      radius: 1.39,
      color: "#006985",
    },
    Ag: {
      radius: 1.45,
      color: "#C0C0C0",
    },
    Cd: {
      radius: 1.44,
      color: "#FFD98F",
    },
    In: {
      radius: 1.42,
      color: "#A67573",
    },
    Sn: {
      radius: 1.39,
      color: "#668080",
    },
    Sb: {
      radius: 1.39,
      color: "#9E63B5",
    },
    Te: {
      radius: 1.38,
      color: "#D47A00",
    },
    I: {
      radius: 1.39,
      color: "#940094",
    },
    Xe: {
      radius: 1.4,
      color: "#429EB0",
    },
    Cs: {
      radius: 1.82,
      color: "#57178F",
    },
    Ba: {
      radius: 1.57,
      color: "#00C900",
    },
    La: {
      radius: 1.87,
      color: "#70D4FF",
    },
    Ce: {
      radius: 1.83,
      color: "#FFFFC7",
    },
    Pr: {
      radius: 1.82,
      color: "#D9FFC7",
    },
    Nd: {
      radius: 1.81,
      color: "#C7FFC7",
    },
    Pm: {
      radius: 1.8,
      color: "#A3FFC7",
    },
    Sm: {
      radius: 1.8,
      color: "#8FFFC7",
    },
    Eu: {
      radius: 1.99,
      color: "#61FFC7",
    },
    Gd: {
      radius: 1.79,
      color: "#45FFC7",
    },
    Tb: {
      radius: 1.77,
      color: "#30FFC7",
    },
    Dy: {
      radius: 1.77,
      color: "#1FFFC7",
    },
    Ho: {
      radius: 1.76,
      color: "#00FF9C",
    },
    Er: {
      radius: 1.76,
      color: "#00E675",
    },
    Tm: {
      radius: 1.75,
      color: "#00D452",
    },
    Yb: {
      radius: 1.94,
      color: "#00BF38",
    },
    Lu: {
      radius: 1.72,
      color: "#00AB24",
    },
    Hf: {
      radius: 1.57,
      color: "#4DC2FF",
    },
    Ta: {
      radius: 1.43,
      color: "#4DA6FF",
    },
    W: {
      radius: 1.37,
      color: "#2194D6",
    },
    Re: {
      radius: 1.37,
      color: "#267DAB",
    },
    Os: {
      radius: 1.35,
      color: "#266696",
    },
    Ir: {
      radius: 1.32,
      color: "#175487",
    },
    Pt: {
      radius: 1.32,
      color: "#D0D0E0",
    },
    Au: {
      radius: 1.34,
      color: "#FFD123",
    },
    Hg: {
      radius: 1.49,
      color: "#B8B8D0",
    },
    Tl: {
      radius: 1.48,
      color: "#A6544D",
    },
    Pb: {
      radius: 1.47,
      color: "#575961",
    },
    Bi: {
      radius: 1.46,
      color: "#9E4FB5",
    },
    Po: {
      radius: 1.45,
      color: "#AB5C00",
    },
    At: {
      radius: 1.47,
      color: "#754F45",
    },
    Rn: {
      radius: 1.45,
      color: "#428296",
    },
    Fr: {
      radius: 2.6,
      color: "#420066",
    },
    Ra: {
      radius: 2.21,
      color: "#007D00",
    },
    Ac: {
      radius: 2.15,
      color: "#70ABFA",
    },
    Th: {
      radius: 1.9,
      color: "#00BAFF",
    },
    Pa: {
      radius: 1.8,
      color: "#00A1FF",
    },
    U: {
      radius: 1.75,
      color: "#008FFF",
    },
    Np: {
      radius: 1.75,
      color: "#0080FF",
    },
    Pu: {
      radius: 1.75,
      color: "#006BFF",
    },
    Am: {
      radius: 1.75,
      color: "#545CF2",
    },
    Cm: {
      radius: 1.75,
      color: "#785CE3",
    },
    Bk: {
      radius: 1.75,
      color: "#8A4FE3",
    },
    Cf: {
      radius: 1.75,
      color: "#A136D4",
    },
    Es: {
      radius: 1.75,
      color: "#B31FD4",
    },
    Fm: {
      radius: 1.75,
      color: "#B31FBA",
    },
    Md: {
      radius: 1.75,
      color: "#B30DA6",
    },
    No: {
      radius: 1.75,
      color: "#BD0D87",
    },
    Lr: {
      radius: 1.75,
      color: "#C70066",
    },
    Rf: {
      radius: 1.57,
      color: "#CC0059",
    },
    Db: {
      radius: 1.49,
      color: "#D1004F",
    },
    Sg: {
      radius: 1.43,
      color: "#D90045",
    },
    Bh: {
      radius: 1.41,
      color: "#E00038",
    },
    Hs: {
      radius: 1.34,
      color: "#E6002E",
    },
    Mt: {
      radius: 1.29,
      color: "#EB0026",
    },
  })
);

// make second atoms map but scale down radius by 2
