import Header from "./components/Header";
import GameEventCardSection from "./components/GameEventCardSection";
import { useAppSelector } from "@/shared/lib";
import {
  selectCategory,
  selectDifficulty,
  selectGameMode,
} from "@/entities/settings";
import { Navigate } from "react-router";
import { useEffect } from "react";
import { nextRound } from "@/features/game";

export default function Game() {
  const category = useAppSelector(selectCategory);
  const difficulty = useAppSelector(selectDifficulty);
  const gameMode = useAppSelector(selectGameMode);

  useEffect(() => {
    nextRound();
  }, []);

  if (!category || !difficulty || !gameMode) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col h-full grow justify-center items-center">
      <Header />
      <GameEventCardSection />
    </div>
  );
}
