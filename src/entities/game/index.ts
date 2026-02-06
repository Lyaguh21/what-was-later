export {
  gameSlice,
  setScore,
  setTopScore,
  addCountGame,
  setUsedIds,
  setFirstEvent,
  setSecondEvent,
  resetGame,
  addOneToStreak,
  setStreak,
  setTopStreak,
  addScore,
  gameInitialState,
  setRoundStatus,
  delNotUsedId,
  pushUsedId,
} from "./model/store/gameSlice";

export {
  selectGame,
  selectGameCountGame,
  selectGameUsedIds,
  selectGameScore,
  selectGameTopScore,
  selectGameStreak,
  selectGameTopStreak,
  selectGameRoundStatus,
  selectGameFirstEvent,
  selectGameSecondEvent,
} from "./model/store/gameSelectors";

export type { IGameEvent } from "./model/type";
export { allHistoryEvents } from "./model/allHistoryEvents.tsx";
