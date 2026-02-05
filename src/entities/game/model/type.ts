export interface IGameEvent {
  id: number;
  name: string;
  date: string;
  description: string;
  imageUrl: string;
  linkOnWiki: string;
  difficulty: "easy" | "medium" | "hard" | "insane";
}
