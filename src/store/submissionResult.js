import { createSlice } from "@reduxjs/toolkit";

const submissionResult = createSlice({
  name: "problem",
  initialState: null,
  reducers: {
    addSubmissionResult: (state, action) => {
      return action.payload;
    },
    removeSubmissionResult: () => {
      return null;
    },
  },
});

export const { addSubmissionResult, removeSubmissionResult } = submissionResult.actions;
export default submissionResult.reducer;
