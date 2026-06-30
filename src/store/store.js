import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import stateSuggestion from "./stateSuggestion";
import statsReducer from "./stats";
import questionReducer from "./question";
import submissionReducer from "./submissionResult";
import activetabReducer from "./activetab";

const store = configureStore({
  reducer: {
    user: userReducer,
    stateSuggest: stateSuggestion,
    stats: statsReducer,
    question: questionReducer,
    submission: submissionReducer,
    activetab: activetabReducer,
  },
});

export default store;
