import {
  createListenerMiddleware,
  type TypedStartListening,
} from "@reduxjs/toolkit";
import { settingsListeners } from "./listeners/settingsListeners";
import { gameListeners } from "./listeners/gameListeners";

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening =
  listenerMiddleware.startListening as TypedStartListening<
    RootState,
    AppDispatch
  >;

export function registerListeners() {
  settingsListeners();
  gameListeners();
}
