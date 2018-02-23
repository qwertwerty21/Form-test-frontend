import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './../styles/App.css';
import Quiz from './Quiz';
import FinishedScreen from './../components/FinishedScreen';

const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        <Switch>
          <Route exact path="/" component={Quiz} />
          <Route exact path="/finished" component={FinishedScreen} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
