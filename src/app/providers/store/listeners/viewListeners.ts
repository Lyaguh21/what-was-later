import { setCategory, setDifficulty, setGameMode } from "@/entities/view";
import { startAppListening } from "../listenerMiddleware";
import { isAnyOf } from "@reduxjs/toolkit";

export function viewListeners() {
  startAppListening({
    matcher: isAnyOf(setGameMode),
    effect: async (action, listenerApi) => {
      localStorage.setItem(
        "gameMode",
        listenerApi.getState().view.selectGameMode ?? "",
      );
    },
  });

  startAppListening({
    matcher: isAnyOf(setCategory),
    effect: async (action, listenerApi) => {
      localStorage.setItem(
        "category",
        listenerApi.getState().view.selectCategory ?? "",
      );
    },
  });

  startAppListening({
    matcher: isAnyOf(setDifficulty),
    effect: async (action, listenerApi) => {
      localStorage.setItem(
        "difficulty",
        listenerApi.getState().view.selectDifficulty ?? "",
      );
    },
  });
}
