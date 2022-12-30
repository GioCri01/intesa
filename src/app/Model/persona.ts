export interface Persona {
  id: number;
  nome: string;
  cognome: string;
  dob?: null;
  codiceFiscale: string;
  cellulare?: null;
  residenza?: null;
  sesso?: null;
  admin: boolean;
}
