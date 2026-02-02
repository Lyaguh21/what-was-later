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
} from "@/entities/settings";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Menu() {
  const navigate = useNavigate();
  const [isAnimated, setAnimated] = useState(false);

  const selectedGameMode = useAppSelector(selectGameMode);
  const selectedDifficulty = useAppSelector(selectDifficulty);
  const selectedCategory = useAppSelector(selectCategory);

  const navigateToGame = () => {
    setAnimated(true);
    setShowStartButton(false);
    setTimeout(() => {
      navigate("/play");
    }, 1600);
  };

  const visibleStartGameButton =
    Boolean(selectedCategory) &&
    Boolean(selectedGameMode && Boolean(selectedDifficulty));

  const [showStartButton, setShowStartButton] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowStartButton(true), 1700);
    return () => clearTimeout(t);
  }, []);

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

      <AnimatePresence>
        {visibleStartGameButton && showStartButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2"
          >
            <Button
              text="Начать игру"
              icon={<IconRocket size={32} />}
              onClick={navigateToGame}
              disabled={!visibleStartGameButton}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
