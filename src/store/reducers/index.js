// Library Reducers
import { combineReducers } from "redux";
import { firebaseReducer } from 'react-redux-firebase'

// Custom Reducers
import auth from './auth';

export default combineReducers({
    firebase: firebaseReducer,
    auth,
});