import { viewInitialState } from "@/entities/view";

export function loadViewState() {
  try {
    return {
      selectGameMode: localStorage.getItem("gameMode") ?? null,
      selectDifficulty: localStorage.getItem("difficulty") ?? null,
      selectCategory: localStorage.getItem("category") ?? null,
    };
  } catch {
    return viewInitialState;
  }
}
