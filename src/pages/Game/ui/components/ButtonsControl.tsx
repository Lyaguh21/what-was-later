import { addCountGame, resetGame, setRoundStatus } from "@/entities/game";
import {
  selectVisibleGoToMenuButton,
  selectVisibleNextRoundButton,
  setVisibleNextRoundButton,
} from "@/entities/view";
import { selectVisibleRestartButton } from "@/entities/view/model/store/viewSelectors";
import { nextRound, startGame } from "@/features/game";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { Button } from "@/shared/ui/Button";
import {
  IconCategory,
  IconChevronRight,
  IconRefresh,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "react-router";

export default function ButtonsControl() {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const visibleNextButton = useAppSelector(selectVisibleNextRoundButton);
  const visibleGoToMenuButton = useAppSelector(selectVisibleGoToMenuButton);
  const visibleRestartButton = useAppSelector(selectVisibleRestartButton);
  return (
    <>
      <AnimatePresence>
        {(visibleNextButton ||
          visibleRestartButton ||
          visibleGoToMenuButton) && (
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.6 }}
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3"
          >
            {/* //* Кнопка в меню */}
            {visibleGoToMenuButton && (
              <Button
                iconLeft={<IconCategory size={42} />}
                onClick={() => {
                  navigation("/");
                  dispatch(resetGame());
                }}
                disabled={!visibleGoToMenuButton}
                className="aspect-square p-3!"
              />
            )}
            {/* //* Кнопка далее */}
            {visibleNextButton && (
              <Button
                text={"Далее"}
                iconRight={<IconChevronRight size={32} />}
                onClick={() => {
                  dispatch(setRoundStatus("idle"));
                  dispatch(setVisibleNextRoundButton(false));
                  dispatch(nextRound());
                }}
                disabled={!visibleNextButton}
              />
            )}
            {/* //* Кнопка повторить */}
            {visibleRestartButton && (
              <Button
                text={"Повторить"}
                iconRight={<IconRefresh size={32} />}
                onClick={() => {
                  dispatch(addCountGame());
                  dispatch(resetGame());
                  dispatch(startGame());
                }}
                disabled={!visibleRestartButton}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
