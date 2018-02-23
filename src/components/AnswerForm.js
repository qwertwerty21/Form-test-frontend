import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import LinearProgress from 'material-ui/LinearProgress';
import Dialog from 'material-ui/Dialog';
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { submitAnswer, setAnswerText } from '../actions';

class AnswerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTextChange = (e, newTextValue) => {
    // let newState = Object.assign({}, this.state);
    // newState['answerText'] = newTextValue;
    // this.setState(newState);
    this.props.actions.setAnswerText(newTextValue);
  };

  handleSubmit = e => {
    e.preventDefault();
    const questionID = this.props.currentQuestion._id;
    const requestData = {
      userID: this.props.userID,
      answerText: this.props.answerText,
      questionID
    };

    this.props.actions.submitAnswer(
      questionID,
      requestData,
      this.props.currentQuestionIndex
    );

    // let newState = Object.assign({}, this.state);
    // newState['answerText'] = '';
    // this.setState(newState);
    this.props.actions.setAnswerText('');
  };

  render() {
    return (
      <form>
        <TextField
          fullWidth
          multiline="true"
          hintText="Your Answer here..."
          onChange={this.handleTextChange.bind(this)}
          value={this.props.answerText}
        />
        <RaisedButton
          primary
          label="Submit"
          type="submit"
          fullWidth
          onClick={this.handleSubmit.bind(this)}
        />
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    allQuestions: state.question.allQuestions,
    currentQuestion: state.question.currentQuestion,
    currentQuestionIndex: state.question.currentQuestionIndex,
    answerText: state.question.answerText,
    error: state.question.error,
    loading: state.question.loading,
    userID: state.user.userID
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      submitAnswer: bindActionCreators(submitAnswer, dispatch),
      setAnswerText: bindActionCreators(setAnswerText, dispatch)
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);
