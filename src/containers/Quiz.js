import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import LinearProgress from 'material-ui/LinearProgress';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import { getAllQuestions, setCurrentQuestion, getUserID } from '../actions';

import QuizDetails from './../components/QuizDetails';
import AnswerForm from './../components/AnswerForm';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentWillMount() {
    this.props.actions.getUserID();
    this.props.actions.getAllQuestions();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.allQuestions.length &&
      nextProps.allQuestions[nextProps.currentQuestionIndex]
    ) {
      this.props.actions.setCurrentQuestion(
        nextProps.allQuestions[nextProps.currentQuestionIndex]
      );
    }
  }

  handleToggle = () => {
    let newState = Object.assign({}, this.state);
    newState['open'] = !this.state.open;
    this.setState(newState);
  };

  dialogActions = [
    <RaisedButton
      label="Try Again"
      primary={true}
      onClick={() => {
        window.location.reload();
      }} //refresh page
    />
  ];

  render() {
    console.log('heres userID', this.props.userID);
    if (this.props.error) {
      return (
        <Dialog
          title="Oops!"
          open={!this.state.open}
          actions={this.dialogActions}
          onRequestClose={this.handleToggle}
        >
          <p>{this.props.error}</p>
        </Dialog>
      );
    } else if (
      !this.props.allQuestions ||
      !this.props.allQuestions.length ||
      !this.props.currentQuestion ||
      this.props.loading
    ) {
      return (
        <div className="spinner-holder">
          <LinearProgress mode="indeterminate" />
        </div>
      ); //end loading if
    } else if (!this.props.allQuestions[this.props.currentQuestionIndex]) {
      return <Redirect to="/finished" />;
    } else {
      return (
        <div>
          <QuizDetails
            time={this.props.currentQuestion.timeLimitInSec}
            question={this.props.currentQuestion.questionText}
          />
          <AnswerForm />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    allQuestions: state.question.allQuestions,
    currentQuestion: state.question.currentQuestion,
    currentQuestionIndex: state.question.currentQuestionIndex,
    error: state.question.error,
    loading: state.question.loading,
    userID: state.user.userID
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getAllQuestions: bindActionCreators(getAllQuestions, dispatch),
      getUserID: bindActionCreators(getUserID, dispatch),
      setCurrentQuestion: bindActionCreators(setCurrentQuestion, dispatch)
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
