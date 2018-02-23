import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/App';

const Routes = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Routes;
