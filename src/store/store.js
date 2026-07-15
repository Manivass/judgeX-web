import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import stateSuggestion from "./stateSuggestion";
import statsReducer from "./stats";
import questionReducer from "./question";
import testcaseReducer from "./testcase";
import activetabReducer from "./activetab";
import submissionReducer from "./submission";
import questionRequestReducer from "./questionRequest";

const store = configureStore({
  reducer: {
    user: userReducer,
    stateSuggest: stateSuggestion,
    stats: statsReducer,
    question: questionReducer,
    testcase: testcaseReducer,
    activetab: activetabReducer,
    submission: submissionReducer,
    questionRequest: questionRequestReducer,
  },
});

export default store;
