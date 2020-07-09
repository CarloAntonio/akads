import * as actionTypes from "../actionTypes";

const initialState = {
    self: null
};

const setUser = (state, action) => {
    return {
        ...state,
        self: action.payload
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER: return setUser(state, action);
        default: return state;
    }
}

export default userReducer;