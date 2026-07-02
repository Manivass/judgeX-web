import { createSlice } from "@reduxjs/toolkit";

const solutionSlice = createSlice({
  name: "solution",
  initialState: null,
  reducers: {
    addSolutions: (state, action) => {
      return action.payload;
    },
    clearSolution: () => {
      return null;
    },
  },
});

export const { addSolutions, clearSolution } = solutionSlice.actions;
export default solutionSlice.reducer;
