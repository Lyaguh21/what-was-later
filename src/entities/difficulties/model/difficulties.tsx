import {
  IconFlameFilled,
  IconPlant,
  IconSkull,
  IconTimeline,
} from "@tabler/icons-react";
import type { difficultyType } from "./type";

export const difficulties: difficultyType[] = [
  {
    key: "easy",
    name: "Легкий",
    icon: <IconPlant color="white" />,
    colorCard:
      "bg-gradient-to-br from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600",
    tag: "±50+ лет",
  },
  {
    key: "medium",
    name: "Средний",
    icon: <IconTimeline color="white" />,
    colorCard:
      "bg-gradient-to-br from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600",
    tag: "±20-50 лет",
  },
  {
    key: "hard",
    name: "Сложный",
    icon: <IconFlameFilled color="white" />,
    colorCard:
      "bg-gradient-to-br from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600",
    tag: "±5-10 лет",
  },
  {
    key: "insane",
    name: "Невозможный",
    icon: <IconSkull color="white" />,
    colorCard:
      "bg-gradient-to-br from-purple-500 to-fuchsia-600 hover:from-purple-600 hover:to-fuchsia-700",
    tag: "±1-5 лет",
  },
];
