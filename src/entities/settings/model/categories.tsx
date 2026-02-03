import {
  IconAtom,
  IconBrandYandex,
  IconCode,
  IconCpu,
  IconGlobe,
  IconPalette,
} from "@tabler/icons-react";
import type { ICategoryCard } from "../../categories/model/type";

export const categories: ICategoryCard[] = [
  {
    key: "all-history",
    name: "Вся история",
    icon: <IconGlobe />,
  },
  {
    key: "russia-history",
    name: "История России",
    icon: <IconBrandYandex />,
  },
  {
    key: "programming-history",
    name: "Программирование",
    icon: <IconCode />,
  },
  {
    key: "science-history",
    name: "Наука",
    icon: <IconAtom />,
  },
  {
    key: "tech-history",
    name: "Технологии",
    icon: <IconCpu />,
  },
  {
    key: "art-history",
    name: "Искусство",
    icon: <IconPalette />,
  },
];
