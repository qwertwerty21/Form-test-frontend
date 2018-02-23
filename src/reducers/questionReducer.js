import {
  GET_ALL_QUESTIONS_LOAD,
  GET_ALL_QUESTIONS_SUCCESS,
  GET_ALL_QUESTIONS_FAIL,
  SET_CURRENT_QUESTION,
  SET_ANSWER_TEXT_SUCCESS,
  SUBMIT_ANSWER_SUCCESS
} from '../constants';

const INITIAL_STATE = {
  allQuestions: [],
  error: null,
  loading: false,
  currentQuestion: null,
  currentQuestionIndex: 0,
  answerText: ''
};

export default function(state = INITIAL_STATE, action) {
  console.log('HERES THE current state IN Questions REDUCER', state);
  console.log('got a quesiotn  action', action);

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
    case SET_CURRENT_QUESTION:
      return Object.assign({}, state, {
        currentQuestion: action.payload
      });
    case SUBMIT_ANSWER_SUCCESS:
      return Object.assign({}, state, {
        currentQuestionIndex: action.payload
      });
    case SET_ANSWER_TEXT_SUCCESS:
      return Object.assign({}, state, {
        answerText: action.payload
      });

    default:
      return state;
  }
} //end export default func
