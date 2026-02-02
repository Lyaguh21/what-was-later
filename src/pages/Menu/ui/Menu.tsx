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
import { useNavigate } from "react-router";

export default function Menu() {
  const navigate = useNavigate();

  const selectedGameMode = useAppSelector(selectGameMode);
  const selectedDifficulty = useAppSelector(selectDifficulty);
  const selectedCategory = useAppSelector(selectCategory);

  const navigateToGame = () => {
    navigate("/play");
  };

  return (
    <>
      <div className="max-w-7xl">
        <div className="mb-4">
          <h1 className="text-6xl font-black text-white mb-4 tracking-tight text-center">
            Что было позже?
          </h1>
          <h2 className="text-xl text-white/80 font-medium text-center">
            Проверь свои знания в истории!
          </h2>
        </div>

        <div className="grid lg:grid-rows-1 lg:grid-cols-3 gap-4 w-full mb-4">
          <ScoreCardSection />
          <CategoriesCardSection />
        </div>

        <div className="grid lg:grid-rows-1 lg:grid-cols-3 gap-4 w-full">
          <GameModsCardSection />
          <DifficultiesCardSection />
        </div>
      </div>

      <div className="fixed bottom-2.5 left-1/2 transform -translate-x-1/2">
        <Button
          text="Начать игру"
          icon={<IconRocket size={32} />}
          onClick={navigateToGame}
          disabled={
            !(
              Boolean(selectedCategory) &&
              Boolean(selectedGameMode && Boolean(selectedDifficulty))
            )
          }
        />
      </div>
    </>
  );
}
