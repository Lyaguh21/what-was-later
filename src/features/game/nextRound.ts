import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  allHistoryEvents,
  delNotUsedId,
  pushUsedId,
  setFirstEvent,
} from "@/entities/game";
import { pickNextEvent } from "./pickNextEvent";

export const nextRound = createAsyncThunk<void, void, { state: RootState }>(
  "game/nextRound",
  async (_, { getState, dispatch }) => {
    const state = getState();

    //todo Добавить проверку на категорию событий
    const historyEvents = allHistoryEvents;
    const notUsedIds = state.game.notUsedIds;

    //* создаем новое событие из тех которых не было
    const first =
      historyEvents[notUsedIds[Math.floor(Math.random() * notUsedIds.length)]];

    dispatch(setFirstEvent(first));
    dispatch(pushUsedId(first.id));
    dispatch(delNotUsedId(first.id));

    await dispatch(pickNextEvent({ firstEventId: first.id }));
  },
);
