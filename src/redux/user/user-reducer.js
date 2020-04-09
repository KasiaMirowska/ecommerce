import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
}
//state gets passed by redux but if there is no state the initial_state will be used
const userReducer = (state=INITIAL_STATE, action) => {
    //action obj has type indicating which redducer should get affected and payload which is the property that gets changed
    //state is current state of the app
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER: 
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
};

export default userReducer;