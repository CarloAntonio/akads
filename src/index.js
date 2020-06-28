// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import firebase from './utils/firebase-service'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

// material ui
import CssBaseline from '@material-ui/core/CssBaseline';

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

const app = (
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
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
