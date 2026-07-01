import { createSlice } from "@reduxjs/toolkit";

const testcase = createSlice({
  name: "problem",
  initialState: null,
  reducers: {
    addTestcase: (state, action) => {
      return action.payload;
    },
    removeTestcase: () => {
      return null;
    },
  },
});

export const { addTestcase, removeTestcase } = testcase.actions;
export default testcase.reducer;
