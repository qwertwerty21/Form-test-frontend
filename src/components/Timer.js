import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';

import { submitAnswer, setAnswerText } from '../actions';
class Timer extends Component {
  constructor(props) {
    super(props);
    console.log('moment,', moment);
    this.state = {
      startTime: Number(new Date()),
      timeLimit: props.time,
      remainingTime: props.time
    };
  }
  componentDidMount(nextProps) {
    this.countdown = setInterval(this.timer, 300);
  }
  componentWillReceiveProps(nextProps) {
    if (this.countdown) {
      clearInterval(this.countdown);
    }
    let newState = Object.assign({}, this.state);
    newState['startTime'] = Number(new Date());
    this.setState(newState);

    this.countdown = setInterval(this.timer, 300);
  }

  componentWillUnmount() {
    if (this.countdown) {
      clearInterval(this.countdown);
    }
  }

  timer = () => {
    let nowTime = Number(new Date());
    //calculate then difference between then and now and subtract the DIFFERENCE from time to get a more accurate timer
    let differenceTime = Math.floor((nowTime - this.state.startTime) / 1000);
    console.log('difftime', differenceTime);
    let updatedCountdownTime = this.state.timeLimit - differenceTime;
    let newState = Object.assign({}, this.state);
    newState['remainingTime'] = updatedCountdownTime;
    this.setState(newState);
    console.log('cdtime', updatedCountdownTime);
    if (this.state.remainingTime < 1) {
      console.log('TIME UP ');

      clearInterval(this.countdown);
      this.handleAutoSubmit();
    }
  };

  handleAutoSubmit = () => {
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

    this.props.actions.setAnswerText('');
  };

  render() {
    return (
      <Card>
        <CardHeader title="Time Remaining:" />
        <CardText>
          {moment.duration(this.state.remainingTime, 'seconds').format('mm:ss')}
        </CardText>
      </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
