import { RECEIVE_SEARCHED_SHOWS } from "../actions/show_actions";
export default function(state = [], action){
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SEARCHED_SHOWS:
            return action.search_ids;
        default:
            return state;
    }
}