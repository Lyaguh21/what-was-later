import { gameSlice } from "@/entities/game";
import { createSlice } from "@reduxjs/toolkit";

interface ViewState {
  ui: {
    visibleNextRoundButton: boolean;
    visibleGameOverModal: boolean;

    visibleDifficultyModal: boolean;
  };
}

const viewInitialState: ViewState = {
  ui: {
    visibleNextRoundButton: false,
    visibleGameOverModal: false,

    visibleDifficultyModal: false,
  },
};

export const viewSlice = createSlice({
  name: "view",
  initialState: viewInitialState,
  reducers: {
    setVisibleNextRoundButton: (state, action) => {
      state.ui.visibleNextRoundButton = action.payload;
    },

    setVisibleGameOverModal: (state, action) => {
      state.ui.visibleGameOverModal = action.payload;
    },

    setVisibleDifficultyModal: (state, action) => {
      state.ui.visibleDifficultyModal = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(gameSlice.actions.resetGame, (state) => {
      state.ui.visibleNextRoundButton = false;
      state.ui.visibleGameOverModal = false;
    });
  },
});

export const {
  setVisibleNextRoundButton,
  setVisibleGameOverModal,
  setVisibleDifficultyModal,
} = viewSlice.actions;
export default viewSlice.reducer;
