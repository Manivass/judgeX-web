import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import stateSuggestion from "./stateSuggestion";
import statsReducer from "./stats";
import questionReducer from "./question";
const store = configureStore({
  reducer: {
    user: userReducer,
    stateSuggest: stateSuggestion,
    stats: statsReducer,
    question: questionReducer,
  },
});

export default store;
