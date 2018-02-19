import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';

const Timer = props => {
  return (
    <Card>
      <CardHeader title="Time Remaining:" />
      <CardText>{props.time}</CardText>
    </Card>
  );
};

export default Timer;
