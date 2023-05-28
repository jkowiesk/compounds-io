import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { Molecule } from "./types";

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG!);

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getMolecules = async () => {
  const query = await getDocs(collection(db, "molecules"));
  const molecules = [];
  query.forEach((doc: any) => {
    const { common_name } = doc.data();
    molecules.push({ id: doc.id, common_name });
  });
  return molecules;
};

export const getMolecule = async (id: string) => {
  if (id == "") {
    return {
      id: "",
      common_name: "",
      atoms: [],
      bonds: [],
      inchi: "",
      ph: "",
      weight: "",
      formula: "",
    } as Molecule;
  }
  const moleculeDoc = await getDoc(doc(db, "molecules", id));
  return moleculeDoc.data() as Molecule;
};
