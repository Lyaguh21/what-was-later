import { Button } from "@/shared/ui/Button";
import { IconRocket } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

export function ButtonControl({
  handleStartGame,
  visibleStartGameButton,
  showStartButton,
}: {
  handleStartGame: () => void;
  visibleStartGameButton: boolean;
  showStartButton: boolean;
}) {
  return (
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
            iconLeft={<IconRocket size={32} />}
            onClick={handleStartGame}
            disabled={!visibleStartGameButton}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
