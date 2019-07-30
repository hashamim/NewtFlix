import { merge, isEqual } from 'lodash';
import { RECEIVE_SHOWS, RECEIVE_SHOW } from '../actions/show_actions';
export default (state = {}, {type, genres}) => {
    Object.freeze(state);
    let newState = Object.assign({},state);
    switch (type) {
        case RECEIVE_SHOWS:
        case RECEIVE_SHOW:
            //iterate over all genres
            Object.keys(genres).forEach((genreId)=>{
                if(state[genreId]){
                    newState[genreId] = genreObjectMerge(state[genreId],genres[genreId]);
                } else {
                    newState[genreId] = genres[genreId];
                }
            })
            if(isEqual(state,newState)){
                return state;
            } else {
                return newState;
            }
            Object.keys(state).forEach(function(genreId){
                let newGenre = merge({},state[genreId]);
                if(genres[genreId]){
                    genres[genreId].show_ids.forEach((show_id) => {
                        if(!state[genreId].show_ids.includes(show_id)){
                            newGenre.show_ids.push(show_id);
                        }
                    })
                }
                newState[genreId] = newGenre;
            })
            return Object.assign({}, genres, newState)
            // return merge({}, state, genres)
        default:
            return state;
    }
}

const genreObjectMerge = function(state,action){
    let stateChanged = false;
    let newState = Object.assign({}, state);
    action.show_ids.forEach((show_id)=>{
        if(!state.show_ids.includes(show_id)){
            stateChanged = true;
            newState[show_id] = action[show_id];
        }
    });
    if (state.name !== action.name) return Object.assign({ name: action.name }, newState);
    if(stateChanged) return newState;
    return state;
}