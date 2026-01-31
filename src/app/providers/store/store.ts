import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

export type _RootState = ReturnType<typeof store.getState>;
export type _AppDispatch = typeof store.dispatch;

declare global {
  type RootState = _RootState;
  type AppDispatch = _AppDispatch;
}
