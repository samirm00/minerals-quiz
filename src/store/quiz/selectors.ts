import { createSelector } from "reselect";
import { QuizState } from "./types";

// Global state
export interface GlobalState {
  quiz: QuizState;
}

// access the state
const quizState = (state: GlobalState) => state.quiz;

const selectCurrentQuestionId = createSelector(
  [quizState],
  (state) => state.currentQuestionId
);

const selectQuestions = createSelector([quizState], (state) => state.questions);

// select current question

export const getCurrentQuestion = createSelector(
  [selectQuestions, selectCurrentQuestionId],
  (questions, currentQuestionId) => questions[currentQuestionId]
);

// select all questions
export const getQuestions = createSelector(
  [selectQuestions, selectCurrentQuestionId],
  (questions, currentQuestionId) => {
    const questionsIds = Object.keys(questions);
    return questionsIds
      .filter((id) => Number(id) > currentQuestionId)
      .map((id) => questions[Number(id)]);
  }
);

// get the total questions number
export const totalQuestionsNumber = createSelector(
  [selectQuestions],
  (questions) => Object.keys(questions).length
);
