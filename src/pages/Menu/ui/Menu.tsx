import { useAppDispatch, useAppSelector } from "@/shared/lib";
import {
  selectCategory,
  selectDifficulty,
  selectGameMode,
} from "@/entities/settings";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import ScoreCardSection from "./components/ScoreCardSection";
import CategoriesCardSection from "./components/CategoriesCardSection";
import GameModsCardSection from "./components/GameModsCardSection";
import DifficultiesCardSection from "./components/DifficultiesCardSection";
import { addCountGame, resetGame } from "@/entities/game";
import { startGame } from "@/features/game";
import { ButtonControl } from "./components/ButtonControl";
import { DifficultyInfoModal } from "@/widgets/difficulty-info-modal";

export default function Menu() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isAnimated, setAnimated] = useState(false);

  const selectedGameMode = useAppSelector(selectGameMode);
  const selectedDifficulty = useAppSelector(selectDifficulty);
  const selectedCategory = useAppSelector(selectCategory);

  const handleStartGame = () => {
    setAnimated(true);
    setShowStartButton(false);
    dispatch(startGame());
    setTimeout(() => {
      navigate("/play");
      dispatch(addCountGame());
    }, 1600);
  };

  const visibleStartGameButton =
    Boolean(selectedCategory) &&
    Boolean(selectedGameMode && Boolean(selectedDifficulty));

  const [showStartButton, setShowStartButton] = useState(false);

  useEffect(() => {
    dispatch(resetGame());

    const t = setTimeout(() => setShowStartButton(true), 1700);
    return () => clearTimeout(t);
  }, [dispatch]);

  return (
    <>
      <div className="max-w-7xl">
        <div className="mb-4">
          <AnimatePresence>
            {!isAnimated && (
              <>
                <motion.h1
                  initial={{ opacity: 0, y: -100 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.2 },
                  }}
                  exit={{
                    opacity: 0,
                    y: -100,
                    transition: { delay: 1, duration: 0.45 },
                  }}
                  className="text-6xl font-black text-white mb-4 tracking-tight text-center"
                >
                  Что было позже?
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.8, delay: 0.8 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.5,
                      delay: 1,
                    },
                  }}
                  className="text-xl text-white/80 font-medium text-center"
                >
                  Проверь свои знания в истории!
                </motion.h2>
              </>
            )}
          </AnimatePresence>
        </div>

        <div className="grid lg:grid-rows-1 lg:grid-cols-3 gap-4 w-full mb-4">
          <AnimatePresence>
            {!isAnimated && (
              <>
                <ScoreCardSection />
                <CategoriesCardSection />
              </>
            )}
          </AnimatePresence>
        </div>

        <div className="grid lg:grid-rows-1 lg:grid-cols-3 gap-4 w-full">
          <AnimatePresence>
            {!isAnimated && (
              <>
                <GameModsCardSection />
                <DifficultiesCardSection />
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ButtonControl
        visibleStartGameButton={visibleStartGameButton}
        showStartButton={showStartButton}
        handleStartGame={handleStartGame}
      />
      <DifficultyInfoModal />
    </>
  );
}
