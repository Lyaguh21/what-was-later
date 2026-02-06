import { createAsyncThunk } from "@reduxjs/toolkit";
import { difficulties } from "@/entities/settings";
import { addScore } from "@/entities/game";

export const CalculatedAddScore = createAsyncThunk<
  void,
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("game/startGame", async (_, { dispatch, getState }) => {
  const state = getState();

  const selectedDifficulty = state.settings.selectDifficulty;

  const countScoreAdd = difficulties.find(
    (el) => el.key === selectedDifficulty,
  )?.scoreAdd;

  dispatch(addScore(countScoreAdd));
});
