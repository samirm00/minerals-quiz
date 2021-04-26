import { combineReducers } from "redux";
import quizReducer from "./quiz/reducers";
import { GlobalState } from "./quiz/selectors";

const allReducers = combineReducers<GlobalState>({
  quiz: quizReducer,
});

export default allReducers;
