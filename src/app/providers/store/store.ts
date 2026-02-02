import { settingsSlice } from "@/entities/settings";
import { configureStore } from "@reduxjs/toolkit";
import { listenerMiddleware, registerListeners } from "./listenerMiddleware";
import { loadSettingsState } from "./loadStates/loadSettingsState";

export const store = configureStore({
  reducer: {
    settings: settingsSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),

  preloadedState: {
    settings: loadSettingsState(),
  },
});

export type _RootState = ReturnType<typeof store.getState>;
export type _AppDispatch = typeof store.dispatch;

declare global {
  type RootState = _RootState;
  type AppDispatch = _AppDispatch;
}
registerListeners();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
