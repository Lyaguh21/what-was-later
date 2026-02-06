import {
  selectVisibleDifficultyModal,
  setVisibleDifficultyModal,
} from "@/entities/view";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { AnimatePresence, motion } from "motion/react";
import {
  IconClock,
  IconMessageFilled,
  IconTarget,
  IconX,
} from "@tabler/icons-react";
import { selectDifficulty } from "@/entities/settings";
import { DifficultyInfo } from "../model/constants";
import cn from "classnames";

export default function DifficultyInfoModal() {
  const dispatch = useAppDispatch();

  const difficulty = useAppSelector(selectDifficulty);
  const difficultyInfo = DifficultyInfo.find((el) => el.key === difficulty);

  const isVisible = useAppSelector(selectVisibleDifficultyModal);

  const handleCloseModal = () => {
    dispatch(setVisibleDifficultyModal(false));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto "
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.2 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={cn("p-8 relative", difficultyInfo?.color)}>
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
              >
                <IconX color="white" />
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-6xl"> {difficultyInfo?.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {difficultyInfo?.difficultyName}
                  </h2>
                </div>
              </div>
              <p className="text-white/90 text-lg">
                {difficultyInfo?.description}
              </p>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Особенности уровня
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                        difficultyInfo?.color,
                      )}
                    >
                      <IconClock color="white"/>
                    </div>
                    <p className="text-gray-700 mt-1.5">
                      {difficultyInfo?.windowTitle}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                        difficultyInfo?.color,
                      )}
                    >
                      <IconTarget color="white"/>
                    </div>
                    <p className="text-gray-700 mt-1.5">
                      {difficultyInfo?.difficultyEventTitle}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                        difficultyInfo?.color,
                      )}
                    >
                      <IconMessageFilled color="white"/>
                    </div>
                    <p className="text-gray-700 mt-1.5">
                      {difficultyInfo?.recommendationTitle}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Примеры пар событий
                </h3>
                <div className="space-y-3">
                  <div className="bg-linear-to-r from-gray-50 to-gray-100 p-4 rounded-xl border-l-4 border-gray-300">
                    <p className="text-gray-700 font-medium">
                      {difficultyInfo?.firstCoupleEvents}
                    </p>
                  </div>
                  <div className="bg-linear-to-r from-gray-50 to-gray-100 p-4 rounded-xl border-l-4 border-gray-300">
                    <p className="text-gray-700 font-medium">
                      {difficultyInfo?.secondCoupleEvents}
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className={cn(
                  "w-full mt-8  text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105",
                  difficultyInfo?.color,
                )}
              >
                Понятно
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
