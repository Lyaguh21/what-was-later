import { createAsyncThunk } from "@reduxjs/toolkit";
import { setFirstEvent } from "@/entities/game";
import { pickNextEvent } from "./pickNextEvent";

export const nextRound = createAsyncThunk<void, void, { state: RootState }>(
  "game/nextRound",
  async (_, { getState, dispatch }) => {
    const state = getState();
    const second = state.game.secondEvent;
    if (!second) return;

    // make previous second the new first
    dispatch(setFirstEvent(second));
    // pick a new second; mark the new first as used
    await dispatch(
      pickNextEvent({ firstEventId: second.id, addFirstToUsed: true }),
    );
  },
);
