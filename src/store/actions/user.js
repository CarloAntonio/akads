import * as actionTypes from "../actionTypes";

// Local Functions
export const setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        payload: user
    }
}
