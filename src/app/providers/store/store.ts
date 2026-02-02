import { viewSlice } from "@/entities/view/model/viewSlice";
import { configureStore } from "@reduxjs/toolkit";
import { listenerMiddleware, registerListeners } from "./listenerMiddleware";
import { loadViewState } from "./loadStates/loadViewState";

export const store = configureStore({
  reducer: {
    view: viewSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),

  preloadedState: {
    view: loadViewState(),
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
