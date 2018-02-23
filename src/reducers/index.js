import { combineReducers } from 'redux';

import QuestionReducer from './questionReducer';
import UserReducer from './userReducer';

const rootReducer = combineReducers({
  question: QuestionReducer,
  user: UserReducer
});

export default rootReducer;
