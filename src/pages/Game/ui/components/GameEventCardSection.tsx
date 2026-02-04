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

import { useAppSelector, useAppDispatch } from "@/shared/lib";

import CorrectIndicator from "./CorrectIndicator";
import {
  setVisibleGameOverModal,
  setVisibleNextRoundButton,
} from "@/entities/view";

import cn from "classnames";

export default function GameEventCardSection() {
  const roundStatus = useAppSelector(selectGameRoundStatus);
  const firstEvent = useAppSelector(selectGameFirstEvent);
  const secondEvent = useAppSelector(selectGameSecondEvent);

  const dispatch = useAppDispatch();

  //* Что происходит при выборе события
  const handleSelectEvent = (
    selectEvent: IGameEvent,
    notSelectEvent: IGameEvent,
  ) => {
    if (roundStatus === "idle") {
      if (
        Number(selectEvent.date.slice(0, 4)) >
        Number(notSelectEvent.date.slice(0, 4))
      ) {
        //* Если все успешно
        dispatch(setRoundStatus("succeeded"));
        dispatch(addScore(5));
        dispatch(addOneToStreak());
        dispatch(setVisibleNextRoundButton(true));
      } else {
        //* Если провал
        dispatch(setRoundStatus("failed"));
        dispatch(setVisibleGameOverModal(true));
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
        <div
          className={cn(
            "grid grid-cols-6 gap-2 sm:grid-cols-7 w-full items-center justify-items-center",
          )}
        >
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

          <CorrectIndicator />

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
    </>
  );
}
