// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import firebase from './utils/firebase-service'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

// material ui
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import lime from '@material-ui/core/colors/lime';

// custom components
import App from './App';

// utils
import * as serviceWorker from './serviceWorker';
import store from './utils/redux-store';

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#7986cb",
      main: lime[500],
    },
    secondary: {
      main: green[500],
    },
    warning: {
      main: "#FF0000"
    },
    text: {
      primary: '#FFF',
    }
  },
});

const app = (
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
