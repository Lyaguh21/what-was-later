export interface IGameMode {
  key: string;
  name: string;
}

export type IGameModeCard = Pick<IGameMode, "key" | "name"> & {
  description: string;
  colorCard: string;
  icon?: React.ReactNode;
  tag?: string;
  tagIcon?: React.ReactNode;
  soon?: boolean;
};
