import { Action } from 'redux';

export interface FetchQuestion extends Action {
    type: 'FETCH_QUESTION';
    payload: {
        id: string;
    };
}

export interface SubmitAnswer extends Action {
    type: 'SUBMIT_ANSWER';
    payload: {
        questionId: string;
        answer: string;
    };
}

export type QuestionActions = FetchQuestion | SubmitAnswer;
