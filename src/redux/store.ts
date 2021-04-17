import {combineReducers, compose, createStore, Reducer, Store} from 'redux'
import {QuestionReducer, QuestionState} from './reducers/questionReducer';

export interface ApplicationState {
    questions: QuestionState
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    questions: QuestionReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<ApplicationState> = createStore(reducers, composeEnhancers());

export {store};