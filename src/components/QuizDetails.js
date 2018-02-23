import React from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';

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
