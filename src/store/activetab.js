import { createSlice } from "@reduxjs/toolkit";

const activetab = createSlice({
  name: "activetab",
  initialState: "Problem",
  reducers: {
    changeActiveTab: (state, action) => {
      return action.payload;
    },
    removeActiveTab: () => {
      return null;
    },
  },
});

export const { changeActiveTab, removeActiveTab } = activetab.actions;
export default activetab.reducer;
