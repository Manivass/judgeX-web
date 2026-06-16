import { createSlice } from "@reduxjs/toolkit";

const stateSuggestionSlice = createSlice({
  name: "stateSuggestion",
  initialState: null,
  reducers: {
    addStateSuggestion: (state, action) => {
      return action.payload;
    },
  },
});

export const { addStateSuggestion } = stateSuggestionSlice.actions;
export default stateSuggestionSlice.reducer;
