import {
  GET_ALL_QUESTIONS_LOAD,
  GET_ALL_QUESTIONS_SUCCESS,
  GET_ALL_QUESTIONS_FAIL
} from '../constants';

const INITIAL_STATE = {
  allQuestions: [],
  error: null,
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  console.log('HERES THE INITIAL_STATE IN Questions REDUCER', INITIAL_STATE);
  console.log('got a comment  action', action);

  let error;

  switch (action.type) {
    case GET_ALL_QUESTIONS_LOAD:
      return Object.assign({}, state, {
        allQuestions: [],
        error: null,
        loading: true
      });
    case GET_ALL_QUESTIONS_SUCCESS:
      return Object.assign({}, state, {
        allQuestions: action.payload.data,
        error: null,
        loading: false
      });
    case GET_ALL_QUESTIONS_FAIL:
      error = action.payload;
      return Object.assign({}, state, {
        allQuestions: state.questions,
        error: error,
        loading: false
      });

    default:
      return state;
  }
} //end export default func
