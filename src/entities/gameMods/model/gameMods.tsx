import {
  IconStarFilled,
  IconFlameFilled,
  IconPlayerPlayFilled,
  IconTarget,
  IconUsersGroup,
  IconDeviceGamepad,
} from "@tabler/icons-react";
import type { IGameModeCard } from "./type";

export const gameMods: IGameModeCard[] = [
  {
    key: "classic",
    name: "Классический",
    description:
      "Выбирайте более позднее событие. Игра продолжается до первой ошибки",
    tag: "Рекомендуется",
    icon: <IconPlayerPlayFilled color="white" />,
    tagIcon: <IconStarFilled color="white" />,
    colorCard:
      "bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
    colorShadow: "shadow-indigo-700/50",
  },
  {
    key: "precise",
    name: "Точный",
    description:
      "Укажите точный год события. Сложнее, но больше очков за правильный ответ",
    tag: "Для профи",
    icon: <IconTarget color="white" />,
    tagIcon: <IconFlameFilled color="white" />,
    colorCard:
      "bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700",
    soon: true,
    colorShadow: "shadow-red-700/50",
  },
  {
    name: "Мультиплеер",
    key: "multiplayer",
    icon: <IconUsersGroup color="white" />,
    description:
      "Соревнуйтесь с друзьями или другими игроками в реальном времени",
    colorCard:
      "bg-gradient-to-br from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700",
    colorShadow: "shadow-teal-700/50",
    tag: "Играй с друзьями",
    tagIcon: <IconDeviceGamepad color="white" />,
    soon: true,
  },
];
