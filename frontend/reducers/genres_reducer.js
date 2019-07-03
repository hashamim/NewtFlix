import { merge } from 'lodash';
import { RECEIVE_SHOWS, RECEIVE_SHOW } from '../actions/show_actions';
export default (state = {}, {type, genres}) => {
    Object.freeze(state);
    let newState = {};
    switch (type) {
        case RECEIVE_SHOWS:
        case RECEIVE_SHOW:
            //iterate over all genres
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
            return merge({}, genres, newState)
            // return merge({}, state, genres)
        default:
            return state;
    }
}

