import {Reducer} from "redux";
import {QuestionActions} from "../actions/questionActions";

interface Question {
    id: string;
    label: string;
}

interface Answer {
    questionId: string;
    answer: string;
}

interface QuestionState {
    questions: Question[],
    currentQuestion: Question,
    answers: Answer[]
}

export const initialState: QuestionState = {
    questions: [],
    currentQuestion: {id: 'foo', label: 'What kind of mineral is this'},
    answers: []
};

const QuestionReducer: Reducer<QuestionState> = (state: QuestionState = initialState, action) => {
    switch ((action as QuestionActions).type) {
        case 'FETCH_QUESTION':
            return { ...state, currentQuestion: {id: 'foo', label: 'TODO'} };
        case 'SUBMIT_ANSWER':
            return {
                ...state,
                answers: [
                    ...state.answers,
                    action.payload
                ]
            };
        default:
            return state;
    }
};

export { QuestionReducer };
export type { QuestionState, Answer };

