/**
 * Action types :
 * 1- FETCH_QUESTION
 * 2- SUBMIT_ANSWER
 */

export enum ActionTypes {
  FETCH_QUESTION = "FETCH_QUESTION",
  SUBMIT_ANSWER = "SUBMIT_ANSWER",
}

/**
 * Question types
 */
export interface Question {
  id: number;
  question: string;
  answers: Answer[];
  selectedAnswerId: number | null;
  correctAnswerId: number;
  previousQuestionId: number | null;
  nextQuestionId: number | null;
}
/**
 * Answer types
 */
export interface Answer {
  id: number;
  answer: string;
}

/**
 * State types
 */
export interface QuizState {
  questions: { [id: number]: Question };
  currentQuestionId: number;
}

/**
 * fetch question action payload type
 */
export interface FetchQuestionPayload {
  questionId: number;
}

/**
 * submit answer action payload types
 */
export interface SubmitAnswerPayload {
  questionId: number;
  answerId: number;
}
