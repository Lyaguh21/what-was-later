import { createAsyncThunk } from "@reduxjs/toolkit";
import { allHistoryEvents } from "@/entities/game";
import { setFirstEvent, setUsedIds } from "@/entities/game";
import { pickNextEvent } from "./pickNextEvent";

export const startGame = createAsyncThunk<void, void, { state: RootState }>(
  "game/startGame",
  async (_, { dispatch, getState }) => {
    const state = getState();
    const used = state.game.usedIds || [];

    // pick random first event not used yet and not later than year 1100
    const candidates = allHistoryEvents.filter(
      (e) => !used.includes(e.id) && Number(e.date.slice(0, 4)) <= 1100,
    );

    // fallback: try any event with year <= 1100 (even if used), otherwise any event
    const fallbackPool = allHistoryEvents.filter(
      (e) => Number(e.date.slice(0, 4)) <= 1100,
    );

    const first =
      candidates.length > 0
        ? candidates[Math.floor(Math.random() * candidates.length)]
        : fallbackPool.length > 0
          ? fallbackPool[Math.floor(Math.random() * fallbackPool.length)]
          : allHistoryEvents[
              Math.floor(Math.random() * allHistoryEvents.length)
            ];

    dispatch(setFirstEvent(first));
    // add first id to used (so it won't be reused immediately)
    dispatch(setUsedIds([...used, first.id]));

    // pick second event using the reusable thunk
    await dispatch(pickNextEvent({ firstEventId: first.id }));
  },
);
