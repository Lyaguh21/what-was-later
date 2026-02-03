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
} from "./model/gameSlice";

export {
  selectGame,
  selectGameCountGame,
  selectGameIdsQuestions,
  selectGameScore,
  selectGameTopScore,
  selectGameStreak,
  selectGameTopStreak,
} from "./model/gameSelectors";
