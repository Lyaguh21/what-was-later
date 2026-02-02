import {
  createListenerMiddleware,
  type TypedStartListening,
} from "@reduxjs/toolkit";
import { settingsListeners } from "./listeners/settingsListeners";

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening =
  listenerMiddleware.startListening as TypedStartListening<
    RootState,
    AppDispatch
  >;

export function registerListeners() {
  settingsListeners();
}
