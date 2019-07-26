import { merge } from 'lodash';
import { RECEIVE_SHOWS, RECEIVE_SHOW, RECEIVE_SEARCHED_SHOWS } from '../actions/show_actions';
export default (state = {allIds: []}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SHOWS:
        case RECEIVE_SHOW:
        case RECEIVE_SEARCHED_SHOWS:
            let allIds = state.allIds.slice();
            let newState;
            let actionShowIds = Object.keys(action.shows);
            let showAdded = false;
            actionShowIds.forEach((actionId) => {
                if(!allIds.includes(actionId)){
                    allIds.push(actionId);
                    showAdded = true;
                }
            });
            newState = merge({}, state, action.shows);
            if(showAdded){
                newState.allIds = allIds;
            }
            return newState;
        default:
            return state;
    }
}