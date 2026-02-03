import { createSlice } from "@reduxjs/toolkit";

interface ViewState {
  ui: {
    visibleNextRoundButton: boolean;
    visibleGoToMenuButton: boolean;
    visibleRestartButton: boolean;
  };
}

const viewInitialState: ViewState = {
  ui: {
    visibleNextRoundButton: false,
    visibleGoToMenuButton: false,
    visibleRestartButton: false,
  },
};

export const viewSlice = createSlice({
  name: "view",
  initialState: viewInitialState,
  reducers: {
    setVisibleNextRoundButton: (state, action) => {
      state.ui.visibleNextRoundButton = action.payload;
    },
    setVisibleGoToMenuButton: (state, action) => {
      state.ui.visibleGoToMenuButton = action.payload;
    },
    setVisibleRestartButton: (state, action) => {
      state.ui.visibleRestartButton = action.payload;
    },
  },
});

export const {
  setVisibleNextRoundButton,
  setVisibleGoToMenuButton,
  setVisibleRestartButton,
} = viewSlice.actions;
export default viewSlice.reducer;
