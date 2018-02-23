import axios from 'axios';
import uuidv4 from 'uuid/v4';

import * as Constants from './../constants';

let API_URL = 'http://form-test-backend.herokuapp.com';

export function getAllQuestions() {
  return async dispatch => {
    dispatch(getAllQuestionsLoad());
    try {
      let results = await axios.get(`${API_URL}/question`);

      dispatch(getAllQuestionsSuccess(results));
    } catch (e) {
      console.log('error in action get all quesitons', e);
      dispatch(
        getAllQuestionsFail('We cannot get your Quiz questions right now.')
      );
    }
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

export function setCurrentQuestion(currentQuestion) {
  return { type: Constants.SET_CURRENT_QUESTION, payload: currentQuestion };
}

export function getUserID() {
  return dispatch => {
    let userID = uuidv4();
    dispatch(getUserIDSuccess(userID));
  };
}

function getUserIDSuccess(userID) {
  return { type: Constants.GET_USER_ID_SUCCESS, payload: userID };
}

export function setAnswerText(answerText) {
  return { type: Constants.SET_ANSWER_TEXT_SUCCESS, payload: answerText };
}

export function submitAnswer(questionID, requestData, currentQuestionIndex) {
  return async dispatch => {
    dispatch(submitAnswerLoad);
    try {
      let result = await axios.post(
        `${API_URL}/question/${questionID}/answer`,
        requestData
      );
      dispatch(submitAnswerSuccess(result, currentQuestionIndex));
    } catch (e) {
      console.log('error in submit quiz answer', e);
      dispatch(submitAnswerFail('We cannot submit your Quiz answer right now'));
    }
  };
}

function submitAnswerLoad() {
  return {
    type: Constants.SUBMIT_ANSWER_LOAD
  };
}

function submitAnswerSuccess(result, currentQuestionIndex) {
  return {
    type: Constants.SUBMIT_ANSWER_SUCCESS,
    payload: ++currentQuestionIndex
  };
}

function submitAnswerFail(errMessage) {
  return { type: Constants.SUBMIT_ANSWER_FAIL, payload: errMessage };
}
