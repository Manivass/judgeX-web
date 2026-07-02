import { createSlice } from "@reduxjs/toolkit";

const submissionSlice = createSlice({
  name: "submission",
  initialState: null,
  reducers: {
    addSubmission: (state, action) => {
      return action.payload;
    },
    clearSubmission: () => {
      return null;
    },
  },
});

export const { addSubmission, clearSubmission } = submissionSlice.actions;
export default submissionSlice.reducer;
