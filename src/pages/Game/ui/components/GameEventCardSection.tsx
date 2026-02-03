import GameEventCard from "@/widgets/GameEventCard/ui/GameEventCard";
import {
  addOneToStreak,
  addScore,
  selectGameFirstEvent,
  selectGameRoundStatus,
  selectGameSecondEvent,
  setRoundStatus,
  type IGameEvent,
} from "@/entities/game";
import { GlassMiniCard } from "@/shared/ui/GlassMiniCard";
import { useAppSelector, useAppDispatch } from "@/shared/lib";
import { nextRound } from "@/features/game";
import { useState } from "react";
import { Button } from "@/shared/ui/Button";
import { AnimatePresence, motion } from "motion/react";
import {
  IconCheck,
  IconChevronRight,
  IconRefresh,
  IconX,
} from "@tabler/icons-react";

export default function GameEventCardSection() {
  const [isVisibleNextButton, setIsVisibleNextButton] = useState(false);

  const roundStatus = useAppSelector(selectGameRoundStatus);
  const firstEvent = useAppSelector(selectGameFirstEvent);
  const secondEvent = useAppSelector(selectGameSecondEvent);

  const dispatch = useAppDispatch();

  const handleSelectEvent = (
    selectEvent: IGameEvent,
    notSelectEvent: IGameEvent,
  ) => {
    if (roundStatus === "idle") {
      if (
        Number(selectEvent.date.slice(0, 4)) >
        Number(notSelectEvent.date.slice(0, 4))
      ) {
        dispatch(setRoundStatus("succeeded"));
        dispatch(addScore(5));
        dispatch(addOneToStreak());
        setIsVisibleNextButton(true);
      } else {
        dispatch(setRoundStatus("failed"));
        setIsVisibleNextButton(true);
      }
    }
  };
  return (
    <>
      {!firstEvent || !secondEvent ? (
        <div className="w-full h-full flex justify-center items-center">
          <div className="text-white text-2xl font-bold">Loading...</div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full gap-12">
          <GameEventCard
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            event={firstEvent}
            onClick={() => handleSelectEvent(firstEvent, secondEvent)}
          />

          <GlassMiniCard className="aspect-square p-3!">
            {roundStatus === "succeeded" && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0 }}
              >
                <IconCheck size={48} color="white" />
              </motion.div>
            )}
            {roundStatus === "failed" && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0 }}
              >
                <IconX size={48} color="white" />
              </motion.div>
            )}
            {roundStatus === "idle" && (
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="text-white text-3xl font-bold m-1.5"
              >
                VS
              </motion.span>
            )}
          </GlassMiniCard>

          <GameEventCard
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut", delay: 0 },
            }}
            event={secondEvent}
            onClick={() => handleSelectEvent(secondEvent, firstEvent)}
          />
        </div>
      )}

      <AnimatePresence>
        {isVisibleNextButton && (
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.6 }}
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2"
          >
            <Button
              text={roundStatus === "succeeded" ? "Далее" : "Повторить"}
              iconRight={
                roundStatus === "succeeded" ? (
                  <IconChevronRight size={32} />
                ) : (
                  <IconRefresh size={32} />
                )
              }
              onClick={() => {
                dispatch(setRoundStatus("idle"));
                dispatch(nextRound());
                setIsVisibleNextButton(false);
              }}
              disabled={!isVisibleNextButton}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
