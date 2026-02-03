import { isAnyOf } from "@reduxjs/toolkit";
import { startAppListening } from "../listenerMiddleware";
import { setCountGame, setTopScore, setTopStreak } from "@/entities/game";

export function gameListeners() {
  startAppListening({
    matcher: isAnyOf(setTopScore, setTopStreak, setCountGame),
    effect: async (action, listenerApi) => {
      localStorage.setItem(
        "topScore",
        String(listenerApi.getState().game.topScore ?? "0"),
      );
      localStorage.setItem(
        "topStreak",
        String(listenerApi.getState().game.topStreak ?? "0"),
      );
      localStorage.setItem(
        "countGame",
        String(listenerApi.getState().game.countGame ?? "0"),
      );
    },
  });
}
