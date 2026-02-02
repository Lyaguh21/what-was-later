import {
  createListenerMiddleware,
  type TypedStartListening,
} from "@reduxjs/toolkit";
import { viewListeners } from "./listeners/viewListeners";

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening =
  listenerMiddleware.startListening as TypedStartListening<
    RootState,
    AppDispatch
  >;

export function registerListeners() {
  viewListeners();
}
