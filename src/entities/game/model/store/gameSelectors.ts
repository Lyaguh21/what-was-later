export const selectGame = (state: RootState) => state.game;

export const selectGameScore = (state: RootState) => state.game.score;
export const selectGameTopScore = (state: RootState) => state.game.topScore;
export const selectGameStreak = (state: RootState) => state.game.streak;
export const selectGameTopStreak = (state: RootState) => state.game.topStreak;
export const selectGameCountGame = (state: RootState) => state.game.countGame;
export const selectGameUsedIds = (state: RootState) => state.game.usedIds;
export const selectGameRoundStatus = (state: RootState) =>
  state.game.roundStatus;

export const selectGameFirstEvent = (state: RootState) => state.game.firstEvent;
export const selectGameSecondEvent = (state: RootState) =>
  state.game.secondEvent;
export const selectNotUsedIds = (state: RootState) => state.game.notUsedIds;
