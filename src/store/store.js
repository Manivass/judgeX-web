import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import stateSuggestion from "./stateSuggestion";
const store = configureStore({
  reducer: {
    user: userReducer,
    stateSuggest: stateSuggestion,
  },
});

export default store;
