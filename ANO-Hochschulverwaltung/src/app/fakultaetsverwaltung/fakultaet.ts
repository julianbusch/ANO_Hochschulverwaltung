export class Fakultaet {
vorname: string;
nachname: string;
kuerzel?: string;
raum?: string;
telefon?: string;


}

export function equalsFakultaet(fak1: Fakultaet, fak2: Fakultaet): boolean {
  return fak1.vorname === fak2.vorname &&
    fak1.nachname === fak2.nachname &&
    fak1.kuerzel === fak2.kuerzel &&
    fak1.raum === fak2.raum &&
    fak1.telefon === fak2.telefon;

}

export function cloneFakultaet(fak1: Fakultaet): Fakultaet {
  const fak2 = new Fakultaet();
  fak2.vorname = fak1.vorname;
  fak2.nachname = fak1.nachname;
  fak2.raum = fak1.raum;
  fak2.kuerzel = fak1.kuerzel;
  fak2.telefon = fak1.telefon;
  return fak2;

}
