import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: null,
  reducers: {
    addQuestion: (state, action) => {
      return action.payload;
    },
    removeQuestion: () => {
      return null;
    },
  },
});

export const { addQuestion, removeQuestion } = questionSlice.actions;
export default questionSlice.reducer;
