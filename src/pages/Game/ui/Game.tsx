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
import { startGame } from "@/features/game";
import { useAppDispatch } from "@/shared/lib";
import ButtonsControl from "./components/ButtonsControl";
import GameOverModal from "@/widgets/GameOverModal/GameOverModal";

export default function Game() {
  const category = useAppSelector(selectCategory);
  const difficulty = useAppSelector(selectDifficulty);
  const gameMode = useAppSelector(selectGameMode);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startGame());
  }, [dispatch]);

  if (!category || !difficulty || !gameMode) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col h-full grow justify-center items-center">
      <Header />
      <GameEventCardSection />
      <ButtonsControl />

      <GameOverModal />
    </div>
  );
}
