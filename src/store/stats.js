import { createSlice } from "@reduxjs/toolkit";

const stats = createSlice({
  name: "stats",
  initialState: null,
  reducers: {
    addStats: (state, action) => {
      return action.payload;
    },
    removeStats: () => {
      return null;
    },
  },
});

export const { addStats, removeStats } = stats.actions;
export default stats.reducer;
