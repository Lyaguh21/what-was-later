export interface ICategory {
  key: string;
  name: string;
  icon: React.ReactNode;
}

export type ICategoryCard = Pick<ICategory, "key" | "name"> & {
  icon: React.ReactNode;
};
