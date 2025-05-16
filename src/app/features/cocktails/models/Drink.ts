export interface Drink {
  id: number;
  name: string;
  price: number;
  alcoholic: boolean;
  flavour?: string;
  primaryType: string;
  secondaryType: string;
  recipe?: string;

  adelhyde: number;
  powderedDelta: number;
  bronsonExtract: number;
  flanergide: number;
  karmotrine: number;
  ice: boolean;
  aged: boolean;
  preparation: string;
  shortcut: string;
  description: string;
  karmotrineOptional: boolean;
  filename: string;
  filenameFull: string;
}
