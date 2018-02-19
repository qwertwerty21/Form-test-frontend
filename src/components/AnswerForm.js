import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import LinearProgress from 'material-ui/LinearProgress';
import Dialog from 'material-ui/Dialog';

import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AnswerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form action="">
        <TextField fullWidth multiline hintText="Your Answer here..." />
        <RaisedButton primary label="Submit" type="submit" />
      </form>
    );
  }
}

export default AnswerForm;
