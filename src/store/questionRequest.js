import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "questionRequest",
  initialState: null,
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
    deleteRequest: () => {
      return null;
    },
  },
});

export const { addRequest, deleteRequest } = requestSlice.actions;
export default requestSlice.reducer;
