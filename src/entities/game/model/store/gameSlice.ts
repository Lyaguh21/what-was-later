import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IGameEvent } from "../type";
import { allHistoryEvents } from "../allHistoryEvents";

interface initialGameStateType {
  score: number;
  topScore: number;
  streak: number;
  topStreak: number;
  countGame: number;
  usedIds: number[];
  notUsedIds: number[];
  posById: number[];
  roundStatus: "idle" | "animating" | "succeeded" | "failed";
  firstEvent: IGameEvent | null;
  secondEvent: IGameEvent | null;
}

const lengthHistoryEvents = allHistoryEvents.length;

export const gameInitialState: initialGameStateType = {
  score: 0,
  streak: 0,
  usedIds: [], //* id событий которые использовались
  notUsedIds: [...Array(lengthHistoryEvents).keys()], //* id событий которые остались
  posById: [...Array(lengthHistoryEvents).keys()], //* Вспомогательный массив для позиционирования
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
      if (action.payload > state.topScore) {
        state.topScore = action.payload;
      }
    }, //* задать максимальный счет

    setStreak: (state, action) => {
      state.streak = action.payload;
    }, //* задать серию подряд
    addOneToStreak: (state) => {
      state.streak += 1;
    }, //* добавить 1 к серии подряд
    setTopStreak: (state, action) => {
      if (action.payload > state.topStreak) {
        state.topStreak = action.payload;
      }
    }, //* задать максимальную серию подряд

    addCountGame: (state) => {
      state.countGame += 1;
    }, //* задать количество игр
    setUsedIds: (state, action) => {
      state.usedIds = action.payload;
    },

    pushUsedId: (state, action: PayloadAction<number>) => {
      state.usedIds.push(action.payload);
    },

    delNotUsedId: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const idx = state.posById[id];
      if (idx === -1 || idx === undefined) return;

      const lastIdx = state.notUsedIds.length - 1;
      const lastId = state.notUsedIds[lastIdx];

      // swap
      state.notUsedIds[idx] = lastId;
      state.posById[lastId] = idx;

      // pop
      state.notUsedIds.pop();
      state.posById[id] = -1;
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
      state.notUsedIds = [...Array(lengthHistoryEvents).keys()];
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
  addCountGame,
  setUsedIds,
  resetGame,
  addOneToStreak,
  setStreak,
  setTopStreak,
  addScore,
  setRoundStatus,
  setFirstEvent,
  setSecondEvent,
  delNotUsedId,
  pushUsedId,
} = gameSlice.actions;
export default gameSlice.reducer;
