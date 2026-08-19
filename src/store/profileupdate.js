import { createSlice } from "@reduxjs/toolkit";

const profileupdate = createSlice({
  name: "profileupdate",

  initialState: false,

  reducers: {
    setprofileupdate: () => {
      return true;
    },

    resetprofileupdate: () => {
      return false;
    },
  },
});

export const { setprofileupdate, resetprofileupdate } = profileupdate.actions;

export default profileupdate.reducer;
