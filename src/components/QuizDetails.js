import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import LinearProgress from 'material-ui/LinearProgress';
import Dialog from 'material-ui/Dialog';

import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Timer from './Timer';

const QuizDetails = props => {
  return (
    <div>
      <Card>
        <Timer time={props.time} />
        <CardHeader title="Question:" />
        <CardText>{props.question}</CardText>
      </Card>
    </div>
  );
};

export default QuizDetails;
