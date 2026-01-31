import Button from "@/shared/ui/Button/Button";
import CategoryCard from "./components/CategoriesCard";
import GameModCard from "./components/GameModCard";
import ScoreCard from "./components/ScoreCard";
import { IconRocket } from "@tabler/icons-react";

export default function Menu() {
  return (
    <div className="h-full w-full min-h-screen flex justify-center bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl px-8 py-8">
        <div className="mb-8">
          <h1 className="text-6xl font-black text-white mb-4 tracking-tight text-center">
            Что было позже?
          </h1>
          <h2 className="text-xl text-white/80 font-medium text-center">
            Проверь свои знания в истории!
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-8 w-full mb-8">
          <ScoreCard />
          <CategoryCard />
        </div>

        <div className="grid grid-cols-3 gap-8 w-full">
          <GameModCard />
        </div>
      </div>

      <div className="absolute bottom-2.5">
        <Button text="Начать игру" icon={<IconRocket size={32} />} />
      </div>
    </div>
  );
}
