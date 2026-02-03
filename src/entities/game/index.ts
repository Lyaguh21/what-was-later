export {
  gameSlice,
  setScore,
  setTopScore,
  setCountGame,
  setUsedIds,
  resetGame,
  addOneToStreak,
  setStreak,
  setTopStreak,
  addScore,
  gameInitialState,
  setRoundStatus,
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
} from "./model/store/gameSelectors";

export type { IGameEvent } from "./model/type";
export { allHistoryEvents } from "./model/allHistoryEvents";
