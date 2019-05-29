import { RECEIVE_USER, REMOVE_USER } from "../actions/session_actions";
import {merge} from 'lodash';

const defaultState = {
    id: null,
    email: null,
    profile: null,
}
export default (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_USER:
            return merge({}, action.user);
        case REMOVE_USER:
            return merge({}, defaultState);
        default:
            return state;
    }

}