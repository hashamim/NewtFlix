import { RECEIVE_USER, REMOVE_USER } from "../actions/session_actions";
import { merge, remove } from 'lodash';
import { REMOVE_LIST_ITEM, RECEIVE_LIST_ITEM } from "../actions/list_actions";
const defaultState = {
    id: null,
    email: null,
    profile: null,
}
export default (state = defaultState, action) => {
    Object.freeze(state);
    let showIds = [];
    let newState = {};
    switch(action.type){
        case RECEIVE_USER:
            return merge({}, action.user);
        case REMOVE_USER:
            return merge({}, defaultState);
        case RECEIVE_LIST_ITEM:
            showIds = state.showIds.slice();
            showIds.push(action.showId);
            newState = merge({}, state);
            newState.showIds = showIds;
            debugger
            return newState;
        case REMOVE_LIST_ITEM:
            showIds = state.showIds.slice();
            newState = merge({}, state);
            remove(showIds, (ele) => ele === action.showId);
            newState.showIds = showIds;
            debugger
            return newState;
        default:
            return state;
    }

}