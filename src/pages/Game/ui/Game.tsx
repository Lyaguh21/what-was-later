import Header from "./components/Header";
import GameEventCardSection from "./components/GameEventCardSection";
import { useAppSelector } from "@/shared/lib";
import {
  selectCategory,
  selectDifficulty,
  selectGameMode,
} from "@/entities/settings";
import { Navigate } from "react-router";
import ButtonsControl from "./components/ButtonsControl";
import GameOverModal from "@/widgets/game-over-modal/GameOverModal";
import LoaderAndErrorSection from "./components/LoaderAndErrorSection";
import { GameCompletedModal } from "@/widgets/game-completed-modal";

export default function Game() {
  const category = useAppSelector(selectCategory);
  const difficulty = useAppSelector(selectDifficulty);
  const gameMode = useAppSelector(selectGameMode);

  if (!category || !difficulty || !gameMode) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col h-full grow justify-center items-center">
      <Header />
      <GameEventCardSection />

      <ButtonsControl />
      <LoaderAndErrorSection />
      <GameOverModal />
      <GameCompletedModal />
    </div>
  );
}
