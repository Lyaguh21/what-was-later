import {
  IconAtom,
  IconBrandYandex,
  IconCode,
  IconCpu,
  IconGlobe,
  IconPalette,
} from "@tabler/icons-react";
import type { ICategoryCard } from "./type";

export const categories: ICategoryCard[] = [
  {
    key: "all-history",
    name: "Вся история",
    icon: <IconGlobe />,
    soon: false,
  },
  {
    key: "russia-history",
    name: "История России",
    icon: <IconBrandYandex />,
    soon: true,
  },
  {
    key: "programming-history",
    name: "Программирование",
    icon: <IconCode />,
    soon: true,
  },
  {
    key: "science-history",
    name: "Наука",
    icon: <IconAtom />,
    soon: true,
  },
  {
    key: "tech-history",
    name: "Технологии",
    icon: <IconCpu />,
    soon: true,
  },
  {
    key: "art-history",
    name: "Искусство",
    icon: <IconPalette />,
    soon: true,
  },
];
