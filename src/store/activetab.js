import { createSlice } from "@reduxjs/toolkit";

const activetab = createSlice({
  name: "activetab",
  initialState: "Problem",
  reducers: {
    changeActiveTab: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeActiveTab } = activetab.actions;
export default activetab.reducer;
