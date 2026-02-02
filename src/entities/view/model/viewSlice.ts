import { createSlice } from "@reduxjs/toolkit";

interface IViewState {
  selectGameMode: string | null;
  selectDifficulty: string | null;
  selectCategory: string | null;
}

export const viewInitialState: IViewState = {
  selectGameMode: null,
  selectDifficulty: null,
  selectCategory: null,
};

export const viewSlice = createSlice({
  name: "view",
  initialState: viewInitialState,
  reducers: {
    setGameMode: (state, action) => {
      state.selectGameMode = action.payload;
    },
    setDifficulty: (state, action) => {
      state.selectDifficulty = action.payload;
    },
    setCategory: (state, action) => {
      state.selectCategory = action.payload;
    },
  },
});

export const { setGameMode, setDifficulty, setCategory } = viewSlice.actions;
export default viewSlice.reducer;
