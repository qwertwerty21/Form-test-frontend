import axios from 'axios';
import * as Constants from './../constants';

let API_URL = 'http://form-test-backend.herokuapp.com';

export function getAllQuestions() {
  return dispatch => {
    dispatch(getAllQuestionsLoad());
    axios.get(`${API_URL}/question`).then(
      questions => {
        dispatch(getAllQuestionsSuccess(questions));
      },
      error => {
        console.log('error in action get all quesitons', error);
        dispatch(
          getAllQuestionsFail('We cannot get your Quiz questions right now.')
        );
      }
    );
  };
}

function getAllQuestionsLoad() {
  return { type: Constants.GET_ALL_QUESTIONS_LOAD };
}

function getAllQuestionsSuccess(questions) {
  return { type: Constants.GET_ALL_QUESTIONS_SUCCESS, payload: questions };
}

function getAllQuestionsFail(errMessage) {
  return { type: Constants.GET_ALL_QUESTIONS_FAIL, payload: errMessage };
}
