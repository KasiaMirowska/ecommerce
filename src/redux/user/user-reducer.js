import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null,
}
//state gets passed by redux but if there is no state the initial_state will be used
const userReducer = (state = INITIAL_STATE, action) => {
    //action obj has type indicating which redducer should get affected and payload which is the property that gets changed
    //state is current state of the app
    switch (action.type) {
        case UserActionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGNIN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null,
            }

        default:
            return state;
    }
};

export default userReducer;