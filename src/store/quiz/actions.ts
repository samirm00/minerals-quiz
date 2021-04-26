import { action } from "typesafe-actions";
// Types
import * as types from "./types";

/**
 * fetchQuestion action
 */

export const fetchQuestion = (payload: types.FetchQuestionPayload) => {
  action(types.ActionTypes.FETCH_QUESTION, payload);
};

/**
 * submitAnswer action
 */

export const submitAnswer = (payload: types.SubmitAnswerPayload) => {
  action(types.ActionTypes.SUBMIT_ANSWER, payload);
};
