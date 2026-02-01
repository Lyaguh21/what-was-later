import {
  IconStarFilled,
  IconFlameFilled,
  IconPlayerPlayFilled,
  IconTarget,
  IconUsersGroup,
  IconDeviceGamepad,
} from "@tabler/icons-react";

export const gameMods = [
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
  },
  {
    name: "Мультиплеер",
    key: "multiplayer",
    icon: <IconUsersGroup color="white" />,
    description:
      "Соревнуйтесь с друзьями или другими игроками в реальном времени",
    colorCard:
      "bg-gradient-to-br from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700",
    tag: "Играй с друзьями",
    tagIcon: <IconDeviceGamepad color="white" />,
    soon: true,
  },
];
