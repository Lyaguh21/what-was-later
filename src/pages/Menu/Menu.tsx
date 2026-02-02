import { IconRocket } from "@tabler/icons-react";
import { Button } from "@/shared/ui/Button";
import GameModsCardSection from "./components/GameModsCardSection";
import DifficultiesCardSection from "./components/DifficultiesCardSection";
import ScoreCardSection from "./components/ScoreCardSection";
import CategoriesCardSection from "./components/CategoriesCardSection";
import { useAppSelector } from "@/shared/lib";
import {
  selectCategory,
  selectDifficulty,
  selectGameMode,
} from "@/entities/view";

export default function Menu() {
  const selectedGameMode = useAppSelector(selectGameMode);
  const selectedDifficulty = useAppSelector(selectDifficulty);
  const selectedCategory = useAppSelector(selectCategory);

  return (
    <div className="h-full w-full min-h-screen flex justify-center bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl px-8 py-4">
        <div className="mb-4">
          <h1 className="text-6xl font-black text-white mb-4 tracking-tight text-center">
            Что было позже?
          </h1>
          <h2 className="text-xl text-white/80 font-medium text-center">
            Проверь свои знания в истории!
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full mb-4">
          <ScoreCardSection />
          <CategoriesCardSection />
        </div>

        <div className="grid grid-cols-3 gap-4 w-full">
          <GameModsCardSection />
          <DifficultiesCardSection />
        </div>
      </div>

      <div className="absolute bottom-2.5">
        <Button
          text="Начать игру"
          icon={<IconRocket size={32} />}
          onClick={() => {
            console.log("start game");
          }}
          disabled={
            !(
              Boolean(selectedCategory) &&
              Boolean(selectedGameMode && Boolean(selectedDifficulty))
            )
          }
        />
      </div>
    </div>
  );
}
