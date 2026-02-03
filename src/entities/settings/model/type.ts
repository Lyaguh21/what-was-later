//? Категории
export interface ICategory {
  key: string;
  name: string;
  icon: React.ReactNode;
}

export type ICategoryCard = Pick<ICategory, "key" | "name"> & {
  icon: React.ReactNode;
};

//? Сложность
export interface IDifficulty {
  key: string;
  name: string;
}

export type IDifficultyCard = Pick<IDifficulty, "key" | "name"> & {
  icon: React.ReactNode;
  colorCard: string;
  colorShadow: string;
  tag: string;

  windowStart: number;
  windowEnd: number;
  gap: number;
};

//? Режим игры
export interface IGameMode {
  key: string;
  name: string;
}

export type IGameModeCard = Pick<IGameMode, "key" | "name"> & {
  description: string;
  colorCard: string;
  colorShadow: string;
  icon?: React.ReactNode;
  tag?: string;
  tagIcon?: React.ReactNode;
  soon?: boolean;
};
