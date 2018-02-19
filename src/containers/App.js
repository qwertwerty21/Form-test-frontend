import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllQuestions } from '../actions';
import uuidv4 from 'uuid/v4';
import './../styles/App.css';
import Timer from './../components/Timer';
import QuizDetails from './../components/QuizDetails';
import AnswerForm from './../components/AnswerForm';
import LinearProgress from 'material-ui/LinearProgress';
import Dialog from 'material-ui/Dialog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null,
      open: false
    };
  }

  componentWillMount() {
    let userID = this.getUserID();
    this.setState({ userID });
    this.props.actions.getAllQuestions();
  }

  getUserID = () => {
    return uuidv4();
  };

  handleToggle = () => {
    let newState = Object.assign({}, this.state);
    newState['open'] = !this.state.open;
    this.setState(newState);
  };

  renderQuizForm = () => {
    console.log('this.props', this.props);
    if (
      !this.props.questions ||
      !this.props.questions.allQuestions.length ||
      this.props.questions.loading
    ) {
      return (
        <div className="spinner-holder">
          <LinearProgress mode="indeterminate" />
        </div>
      ); //end loading if
    } else if (this.props.questions.error) {
      return (
        <Dialog
          title="Oops!"
          open={!this.state.open}
          actions={this.dialogActions}
          onRequestClose={this.handleToggle}
        >
          <p>{this.props.questions.error}</p>
        </Dialog>
      );
    } else {
      return (
        <div>
          <QuizDetails
            time={this.props.questions.allQuestions[0].timeLimitInSec}
            question={this.props.questions.allQuestions[0].questionText}
          />
          <AnswerForm />
        </div>
      );
    }
  };

  render() {
    return (
      <div className="app-container">
        <div className="content-container">{this.renderQuizForm()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.question
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getAllQuestions: bindActionCreators(getAllQuestions, dispatch)
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
