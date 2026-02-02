import { settingsInitialState } from "@/entities/settings";

export function loadSettingsState() {
  try {
    return {
      selectGameMode: localStorage.getItem("gameMode") ?? null,
      selectDifficulty: localStorage.getItem("difficulty") ?? null,
      selectCategory: localStorage.getItem("category") ?? null,
    };
  } catch {
    return settingsInitialState;
  }
}
