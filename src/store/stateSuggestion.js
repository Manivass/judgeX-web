import { createSlice } from "@reduxjs/toolkit";

const stateSuggestionSlice = createSlice({
  name: "stateSuggestion",
  initialState: null,
  reducers: {
    addStateSuggestion: (state, action) => {
      return action.payload;
    },
    removeStateSuggestion: () => {
      return null;
    },
  },
});

export const { addStateSuggestion, removeStateSuggestion } =
  stateSuggestionSlice.actions;
export default stateSuggestionSlice.reducer;
