import { createAsyncThunk } from "@reduxjs/toolkit";
import { allHistoryEvents, pushUsedId, type IGameEvent } from "@/entities/game";
import { setSecondEvent } from "@/entities/game";
import { difficulties, type EventDifficulty } from "@/entities/settings";
import {
  isAllowedEventDifficulty,
  parseYear,
} from "./model/game-events-sorted";
import { delNotUsedId } from "@/entities/game";

type Arg = { firstEventId: number };

const DIFF_RANK: Record<EventDifficulty, number> = {
  easy: 0,
  medium: 1,
  hard: 2,
  insane: 3,
};

export const pickNextEvent = createAsyncThunk<
  IGameEvent | undefined,
  Arg,
  { state: RootState }
>("game/pickNextEvent", async ({ firstEventId }, { getState, dispatch }) => {
  const state = getState();
  const selectedDifficulty = state.settings.selectDifficulty as EventDifficulty;

  const diffCfg = difficulties.find((el) => el.key === selectedDifficulty);
  const windowStart = diffCfg?.windowStart ?? 20;
  const windowEnd = diffCfg?.windowEnd ?? 100;

  const events = allHistoryEvents;
  const first = events[firstEventId];
  if (!first) return undefined;

  const firstYear = parseYear(first.date);
  if (Number.isNaN(firstYear)) return undefined;

  const posById = state.game.posById;
  if (!posById) {
    console.log("posById is missing in state.game");
    return undefined;
  }

  // buckets by difficulty rank (0: easy .. 3: insane)
  const buckets: IGameEvent[][] = [[], [], [], []];

  const n = events.length;
  let left = firstEventId - 1;
  let right = firstEventId + 1;

  let leftDone = false;
  let rightDone = false;

  while (!leftDone || !rightDone) {
    if (!leftDone) {
      if (left < 0) leftDone = true;
      else {
        const e = events[left];
        const diff = Math.abs(parseYear(e.date) - firstYear);
        if (diff > windowEnd) leftDone = true;
        else {
          if (
            diff >= windowStart &&
            posById[e.id] !== -1 &&
            isAllowedEventDifficulty(e.difficulty, selectedDifficulty)
          ) {
            buckets[DIFF_RANK[e.difficulty]].push(e);
          }
          left--;
        }
      }
    }

    if (!rightDone) {
      if (right >= n) rightDone = true;
      else {
        const e = events[right];
        const diff = Math.abs(parseYear(e.date) - firstYear);
        if (diff > windowEnd) rightDone = true;
        else {
          if (
            diff >= windowStart &&
            posById[e.id] !== -1 &&
            isAllowedEventDifficulty(e.difficulty, selectedDifficulty)
          ) {
            buckets[DIFF_RANK[e.difficulty]].push(e);
          }
          right++;
        }
      }
    }
  }

  // Try to pick from the same difficulty first, then lower difficulties
  const selectedRank = DIFF_RANK[selectedDifficulty];
  let pick: IGameEvent | undefined = undefined;

  for (let r = selectedRank; r >= 0; r--) {
    const bucket = buckets[r];
    if (bucket.length > 0) {
      pick = bucket[(Math.random() * bucket.length) | 0];
      break;
    }
  }

  // If no candidates within the window, try a random allowed event from the whole list
  if (!pick) {
    const fallback: IGameEvent[] = [];
    for (let i = 0; i < n; i++) {
      const e = events[i];
      if (
        posById[e.id] !== -1 &&
        isAllowedEventDifficulty(e.difficulty, selectedDifficulty)
      ) {
        fallback.push(e);
      }
    }
    if (fallback.length > 0) {
      pick = fallback[(Math.random() * fallback.length) | 0];
    }
  }

  //? Если брать нечего, то конец игры
  if (!pick) {
    console.log("endGame");
    return undefined;
  }

  dispatch(setSecondEvent(pick));
  dispatch(delNotUsedId(pick.id));
  dispatch(pushUsedId(pick.id));

  return pick;
});
