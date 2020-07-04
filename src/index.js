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
      light: "#60d6ff",
      main: "#00A4D3",
      dark: "#0076a2",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffff85",
      main: "#FFD353",
      dark: "#c8a31d",
      contrastText: "#000"
    },
    warning: {
      main: "#FF0000"
    },
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
