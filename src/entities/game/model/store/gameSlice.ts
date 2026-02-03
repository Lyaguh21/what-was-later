import { createSlice } from "@reduxjs/toolkit";
import type { IGameEvent } from "../type";

interface initialGameStateType {
  score: number;
  topScore: number;
  streak: number;
  topStreak: number;
  countGame: number;
  usedIds: number[];
  roundStatus: "idle" | "animating" | "succeeded" | "failed";
  firstEvent: IGameEvent | null;
  secondEvent: IGameEvent | null;
}

export const gameInitialState: initialGameStateType = {
  score: 0,
  streak: 0,
  usedIds: [],

  topScore: 0,
  countGame: 0,
  topStreak: 0,

  roundStatus: "idle",
  firstEvent: null,
  secondEvent: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState: gameInitialState,
  reducers: {
    setScore: (state, action) => {
      state.score = action.payload;
    }, //* задать счет
    addScore: (state, action) => {
      state.score += action.payload;
    }, //* добавить количество очков  счету
    setTopScore: (state, action) => {
      state.topScore = action.payload;
    }, //* задать максимальный счет

    setStreak: (state, action) => {
      state.streak = action.payload;
    }, //* задать серию подряд
    addOneToStreak: (state) => {
      state.streak += 1;
    }, //* добавить 1 к серии подряд
    setTopStreak: (state, action) => {
      state.topStreak = action.payload;
    }, //* задать максимальную серию подряд

    setCountGame: (state, action) => {
      state.countGame = action.payload;
    }, //* задать количество игр
    setUsedIds: (state, action) => {
      state.usedIds = action.payload;
    },

    setRoundStatus: (state, action) => {
      state.roundStatus = action.payload;
    },

    setFirstEvent: (state, action) => {
      state.firstEvent = action.payload;
    },

    setSecondEvent: (state, action) => {
      state.secondEvent = action.payload;
    },

    resetGame: (state) => {
      state.usedIds = [];
      state.score = 0;
      state.streak = 0;
      state.roundStatus = "idle";
      state.firstEvent = null;
      state.secondEvent = null;
    },
  },
});

export const {
  setScore,
  setTopScore,
  setCountGame,
  setUsedIds,
  resetGame,
  addOneToStreak,
  setStreak,
  setTopStreak,
  addScore,
  setRoundStatus,
  setFirstEvent,
  setSecondEvent,
} = gameSlice.actions;
export default gameSlice.reducer;
