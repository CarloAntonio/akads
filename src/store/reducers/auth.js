import * as actionTypes from "../actionTypes";

const initialState = {
    authError: null
};

const loginSuccess = (state, action) => {
    return {
        ...state,
        authError: null
    }
}

const loginError = (state, action) => {
    return {
        ...state,
        authError: action.payload
    }
}

const logoutSuccess = (state, action) => {
    return {
        authError: null
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_ERROR: return loginError(state, action);
        case actionTypes.LOGOUT_SUCCESS: return logoutSuccess(state, action);
        default: return state;
    }
}

export default authReducer;