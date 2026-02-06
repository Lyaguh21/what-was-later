import {
  IconFlameFilled,
  IconPlant,
  IconSkull,
  IconTimeline,
} from "@tabler/icons-react";
import type { IDifficultyCard } from "./type";

export const difficulties: IDifficultyCard[] = [
  {
    key: "easy",
    name: "Легкий",
    icon: <IconPlant color="white" />,
    colorCard:
      "bg-gradient-to-br from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600",
    colorShadow: "shadow-green-600/40",

    windowStart: 80,
    windowEnd: 300,
    scoreAdd: 5,
  },
  {
    key: "medium",
    name: "Средний",
    icon: <IconTimeline color="white" />,
    colorCard:
      "bg-gradient-to-br from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600",
    colorShadow: "shadow-cyan-600/40",

    windowStart: 50,
    windowEnd: 200,
    scoreAdd: 10,
  },
  {
    key: "hard",
    name: "Сложный",
    icon: <IconFlameFilled color="white" />,
    colorCard:
      "bg-gradient-to-br from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600",
    colorShadow: "shadow-orange-600/40",

    windowStart: 20,
    windowEnd: 90,
    scoreAdd: 20,
  },
  {
    key: "insane",
    name: "Невозможный",
    icon: <IconSkull color="white" />,
    colorCard:
      "bg-gradient-to-br from-purple-500 to-fuchsia-600 hover:from-purple-600 hover:to-fuchsia-700",
    colorShadow: "shadow-fuchsia-600/50",

    windowStart: 5,
    windowEnd: 50,
    scoreAdd: 40,
  },
];
