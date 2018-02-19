import { combineReducers } from 'redux';

import QuestionReducer from './questionReducer';

const rootReducer = combineReducers({ question: QuestionReducer });

export default rootReducer;
