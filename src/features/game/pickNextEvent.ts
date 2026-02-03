import { createAsyncThunk } from "@reduxjs/toolkit";
import { allHistoryEvents, type IGameEvent } from "@/entities/game";
import { setUsedIds, setSecondEvent } from "@/entities/game";
import { difficulties } from "@/entities/settings";

type Arg = { firstEventId: number; addFirstToUsed?: boolean };

function parseYear(date: string) {
  const yearStr = date.slice(0, 4);
  return Number(yearStr);
}

export const pickNextEvent = createAsyncThunk<
  IGameEvent | undefined,
  Arg,
  { state: RootState }
>("game/pickNextEvent", async (arg, { getState, dispatch }) => {
  const { firstEventId, addFirstToUsed } = arg;
  const state = getState();
  const usedIds = state.game.usedIds || [];
  const selectedDifficulty = state.settings.selectDifficulty;

  const windowStart = difficulties.find(
    (el) => el.key === selectedDifficulty,
  )?.windowStart;
  const windowEnd = difficulties.find(
    (el) => el.key === selectedDifficulty,
  )?.windowEnd;

  const first = allHistoryEvents.find((e) => e.id === firstEventId);
  if (!first) return undefined;

  const firstYear = parseYear(first.date);

  const withinWindow = allHistoryEvents.filter((e) => {
    if (e.id === firstEventId) return false;
    if (usedIds.includes(e.id)) return false;
    const y = parseYear(e.date);
    const diff = Math.abs(y - firstYear);
    return diff >= windowStart && diff <= windowEnd; //*Window of 20 to 300 years
  });

  let candidates = withinWindow;
  if (candidates.length === 0) {
    candidates = allHistoryEvents.filter(
      (e) => e.id !== firstEventId && !usedIds.includes(e.id),
    );
  }
  if (candidates.length === 0) {
    candidates = allHistoryEvents.filter((e) => e.id !== firstEventId);
  }

  const pick = candidates[Math.floor(Math.random() * candidates.length)];

  const newUsed = [...usedIds];
  if (!newUsed.includes(pick.id)) newUsed.push(pick.id);
  if (addFirstToUsed) {
    if (!newUsed.includes(firstEventId)) newUsed.push(firstEventId);
  }

  dispatch(setUsedIds(newUsed));
  dispatch(setSecondEvent(pick));

  return pick;
});
