import {
  addCountGame,
  resetGame,
  selectGameScore,
  selectGameStreak,
  selectGameTopScore,
  setTopScore,
  setTopStreak,
} from "@/entities/game";
import { selectVisibleGameOverModal } from "@/entities/view";
import { startGame } from "@/features/game";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import {
  IconFlameFilled,
  IconHomeFilled,
  IconReload,
  IconSkull,
  IconStarFilled,
  IconTrophyFilled,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "react-router";

export default function GameOverModal() {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const visibleGameOverModal = useAppSelector(selectVisibleGameOverModal);

  const topScore = useAppSelector(selectGameTopScore);
  const score = useAppSelector(selectGameScore);
  const streak = useAppSelector(selectGameStreak);
  const isNewRecord = Boolean(score > topScore);

  const handleRestartGame = () => {
    dispatch(setTopScore(score));
    dispatch(setTopStreak(streak));
    dispatch(addCountGame());
    dispatch(resetGame());
    dispatch(startGame());
  };

  const handleMenuNavigate = () => {
    dispatch(setTopScore(score));
    dispatch(setTopStreak(streak));
    navigation("/");
  };

  return (
    <AnimatePresence>
      {visibleGameOverModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.2 } }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 modal-overlay flex items-center justify-center z-50 bg-black/50 backdrop-blur-xs"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 1.2 } }}
            exit={{ opacity: 0, scale: 0.2 }}
            transition={{ duration: 0.3 }}
            className="modal-content bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
          >
            <div className="bg-linear-to-r from-red-500 to-pink-500 px-8 py-6 text-center">
              <IconSkull color="white" size={64} className="mx-auto" />
              <h2 className="text-white text-3xl font-bold">Игра окончена!</h2>
            </div>

            <div className="p-8 text-center">
              {isNewRecord && (
                <div
                  id="new-record-badge"
                  className="record-badge bg-linear-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 mb-6"
                >
                  <IconTrophyFilled color="white" size={32} />
                  <span className="text-lg font-bold">НОВЫЙ РЕКОРД!</span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 text-center">
                  <IconStarFilled
                    color="#6366F1"
                    className="mx-auto"
                    size={32}
                  />
                  <div className="text-gray-600 text-sm font-medium mb-1">
                    Ваш счёт
                  </div>
                  <div
                    className="text-indigo-600 text-4xl font-bold"
                    id="final-score"
                  >
                    {score}
                  </div>
                  <div className="text-gray-500 text-xs">очков</div>
                </div>

                <div className="bg-linear-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center">
                  <IconFlameFilled
                    color="#F97316"
                    className="mx-auto"
                    size={32}
                  />
                  <div className="text-gray-600 text-sm font-medium mb-1">
                    Ваша серия
                  </div>
                  <div
                    className="text-orange-600 text-4xl font-bold"
                    id="final-streak"
                  >
                    {streak}
                  </div>
                  <div className="text-gray-500 text-xs">подряд</div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleRestartGame}
                  className="flex-1 bg-linear-to-r from-indigo-500 to-purple-500 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <IconReload />
                  Повторить
                </button>
                <button
                  onClick={handleMenuNavigate}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <IconHomeFilled color="#374151" />В меню
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
