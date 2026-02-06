//? Категории
export interface ICategory {
  key: string;
  name: string;
  icon: React.ReactNode;
}

export type ICategoryCard = Pick<ICategory, "key" | "name"> & {
  icon: React.ReactNode;
  soon: boolean;
};

//? Сложность
export type EventDifficulty = "easy" | "medium" | "hard" | "insane";

export interface IDifficulty {
  key: EventDifficulty;
  name: string;
}

export type IDifficultyCard = Pick<IDifficulty, "key" | "name"> & {
  icon: React.ReactNode;
  colorCard: string;
  colorShadow: string;
  windowStart: number;
  windowEnd: number;
  scoreAdd: number;
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
