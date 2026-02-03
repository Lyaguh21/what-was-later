export {
  gameSlice,
  setScore,
  setTopScore,
  setCountGame,
  setIdsQuestions,
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
  selectGameIdsQuestions,
  selectGameScore,
  selectGameTopScore,
  selectGameStreak,
  selectGameTopStreak,
  selectGameRoundStatus,
} from "./model/store/gameSelectors";

export type { IGameEvent } from "./model/type";
export { allHistoryEvents } from "./model/allHistoryEvents";
