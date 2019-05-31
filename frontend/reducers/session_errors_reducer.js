import { RECEIVE_SESSION_ERRORS, RECEIVE_USER, REMOVE_USER, RESET_ERRORS } from "../actions/session_actions";

export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        case RECEIVE_USER:
            return [];
        case REMOVE_USER:
            return [];
        case RESET_ERRORS:
            return [];
        default:
            return state;  
    }
}