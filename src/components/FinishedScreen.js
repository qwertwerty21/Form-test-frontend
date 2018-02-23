import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';

const FinishedScreen = props => {
  return (
    <Card>
      <CardHeader title="Thank you for completing our Quiz." />
      <CardText>
        Our team will analyze your results and get back to you shortly!
      </CardText>
    </Card>
  );
};

export default FinishedScreen;
