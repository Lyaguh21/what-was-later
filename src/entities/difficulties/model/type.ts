export interface IDifficulty {
  key: string;
  name: string;
}

export type IDifficultyCard = Pick<IDifficulty, "key" | "name"> & {
  icon: React.ReactNode;
  colorCard: string;
  colorShadow: string;
  tag: string;
};
