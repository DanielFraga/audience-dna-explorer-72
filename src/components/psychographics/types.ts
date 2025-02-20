
export type PsychographicPoint = {
  subject: string;
  A: number;
  fullName: string;
};

export type PsychographicDescription = Record<string, string[]>;

export type ColorScheme = Record<string, string>;
