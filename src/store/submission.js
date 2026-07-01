import { createSlice } from "@reduxjs/toolkit";

const submissionSlice = createSlice({
  name: "submission",
  initialState: null,
  reducers: {
    addSubmission: (state, action) => {
      return action.payload;
    },
    removeSubmission: () => {
      return null;
    },
  },
});

export const { addSubmission, removeSubmission } = submissionSlice.actions;
export default submissionSlice.reducer;
