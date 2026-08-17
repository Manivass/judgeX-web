import { createSlice } from "@reduxjs/toolkit";

const problemofday = createSlice({
  name: "problemofDay",
  initialState: null,
  reducers: {
    addProblemofDay: (state, action) => {
      return action.payload;
    },
    removeProblemofDay: () => {
      return null;
    },
  },
});

export const { addProblemofDay, removeProblemofDay } = problemofday.actions;
export default problemofday.reducer;
