
import * as actionTypes from "../actionTypes";
import { auth } from '../../utils/firebase-service'

export const signUp = credentials => {
    return dispatch => {
        return auth().createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).catch(err => {
            dispatch(signInError(err))
            return err;
        })
    }  
}
export const signIn = (credentials) => {
    return dispatch => {
        return auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(result => {
            dispatch(signInSuccess())
            return { code: "ok", message: "Successfully Signed In"}
        }).catch(err => {
            dispatch(signInError(err))
            return err;
        })
    }
}

export const signOut = () => {
    return dispatch => {
        auth().signOut().then(() => {
            dispatch(signOutSuccess())
            // dispatch(clearStore())
            // dispatch(clearInstance())
        })
    }
}

// Local Functions
const signInSuccess = () => {
    return {
        type: actionTypes.LOGIN_SUCCESS
    }
}

const signInError = (err) => {
    return {
        type: actionTypes.LOGIN_ERROR, 
        payload: err
    }
}

const signOutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    }
}