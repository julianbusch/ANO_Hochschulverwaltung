export class Professor {
  vorname: string;
  nachname: string;
  kuerzel?: string;
  raum?: string;
  telefon?: string;
}

export function equalsProfessor(prof1: Professor, prof2: Professor ):
  boolean {
  return prof1.vorname === prof2.vorname &&
    prof1.nachname === prof2.nachname &&
    prof1.kuerzel === prof2.kuerzel &&
    prof1.raum === prof2.raum &&
    prof1.telefon === prof2.telefon;
}
export function cloneProfessor(prof: Professor): Professor {
  const result = new Professor();
  result.vorname = prof.vorname;
  result.nachname = prof.nachname;
  result.kuerzel = prof.kuerzel;
  result.raum = prof.raum;
  result.telefon = prof.telefon;
  return result;
}

