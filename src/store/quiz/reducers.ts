import { Reducer } from "redux";
import * as types from "./types";
import data from "./data";

const initialState: types.QuizState = {
  questions: data,
  currentQuestionId: 1,
};

const quizReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ActionTypes.FETCH_QUESTION:
      const payload = action.payload as types.FetchQuestionPayload;
      return {
        ...state,
        currentQuestionId: payload.questionId,
      };

    case types.ActionTypes.SUBMIT_ANSWER: {
      const payload = action.payload as types.SubmitAnswerPayload;
      const question = state.questions[payload.questionId];
      return {
        ...state,
        questions: {
          ...state.questions,
          [question.id]: {
            ...question,
            answerId: payload.answerId,
          },
        },
      };
    }

    default:
      return state;
  }
};

export default quizReducer;
