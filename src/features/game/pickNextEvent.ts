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

  const candidates: IGameEvent[] = [];

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
            candidates.push(e);
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
            candidates.push(e);
          }
          right++;
        }
      }
    }
  }

  //todo добавить конец игры
  if (candidates.length === 0) {
    console.log("Событий нет, игра закончена");
    return undefined;
  }

  const pick = candidates[(Math.random() * candidates.length) | 0];

  dispatch(setSecondEvent(pick));
  dispatch(delNotUsedId(pick.id));
  dispatch(pushUsedId(pick.id));

  return pick;
});
