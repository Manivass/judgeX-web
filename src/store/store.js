import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import stateSuggestion from "./stateSuggestion";
import statsReducer from "./stats";
import questionReducer from "./question";
import testcaseReducer from "./testcase";
import activetabReducer from "./activetab";
import submissionSlice from "./submission";

const store = configureStore({
  reducer: {
    user: userReducer,
    stateSuggest: stateSuggestion,
    stats: statsReducer,
    question: questionReducer,
    testcase: testcaseReducer,
    activetab: activetabReducer,
    submission: submissionSlice,
  },
});

export default store;
