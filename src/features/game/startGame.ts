import { createAsyncThunk } from "@reduxjs/toolkit";
import { allHistoryEvents } from "@/entities/game";
import { setFirstEvent } from "@/entities/game";
import { pickNextEvent } from "./pickNextEvent";
import {
  delNotUsedId,
  pushUsedId,
} from "@/entities/game/model/store/gameSlice";

export const startGame = createAsyncThunk<void, void, { state: RootState }>(
  "game/startGame",
  async (_, { dispatch, getState }) => {
    const state = getState();
    const difficulty = state.settings.selectDifficulty;

    //todo Добавить проверку на категорию событий
    const historyEvents = allHistoryEvents.filter(
      (e) => e.difficulty === difficulty,
    );

    //* Случайно выбираем первое событиe

    //todo сделать проверку на сложность
    const first =
      historyEvents[Math.floor(Math.random() * historyEvents.length)];

    dispatch(setFirstEvent(first));
    dispatch(pushUsedId(first.id));
    dispatch(delNotUsedId(first.id));

    await dispatch(pickNextEvent({ firstEventId: first.id }));
  },
);
