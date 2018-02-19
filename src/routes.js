import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';

const Routes = () => {
  return <Route path="/" component={App} />;
};

export default Routes;
