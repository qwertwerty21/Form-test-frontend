import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

//theme colors
import {
  cyan500,
  cyan700,
  pinkA200,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack
} from 'material-ui/styles/colors';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './styles/index.css';
// import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
// import { Router } from 'react-router';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import Routes from './routes';
import rootReducer from './reducers';

//customize muitheme
const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: pinkA200,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack
  }
});

const createStoreWithMiddleWare = applyMiddleware(promise, thunk)(createStore);

const store = createStoreWithMiddleWare(rootReducer, {});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
