export const selectVisibleNextRoundButton = (state: RootState) =>
  state.view.ui.visibleNextRoundButton;

export const selectVisibleGameOverModal = (state: RootState) =>
  state.view.ui.visibleGameOverModal;

export const selectVisibleDifficultyModal = (state: RootState) =>
  state.view.ui.visibleDifficultyModal;

export const selectVisibleGameCompletedModal = (state: RootState) =>
  state.view.ui.visibleGameCompletedModal;
