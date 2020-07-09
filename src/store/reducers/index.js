// Library Reducers
import { combineReducers } from "redux";
import { firebaseReducer } from 'react-redux-firebase'

// Custom Reducers
import auth from './auth';
import user from './user';
import misc from './misc';

export default combineReducers({
    firebase: firebaseReducer,
    auth,
    user,
    misc
});