import { createSlice } from "@reduxjs/toolkit";

interface ISettingsState {
  selectGameMode: string | null;
  selectDifficulty: string | null;
  selectCategory: string | null;
}

export const settingsInitialState: ISettingsState = {
  selectGameMode: null,
  selectDifficulty: null,
  selectCategory: null,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: settingsInitialState,
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

export const { setGameMode, setDifficulty, setCategory } =
  settingsSlice.actions;
export default settingsSlice.reducer;
