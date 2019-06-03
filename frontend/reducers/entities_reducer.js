import user from './user_reducer';
import { combineReducers } from 'redux';
import shows from './shows_reducer';
import genres from './genres_reducer';

export default combineReducers({
    user,
    shows,
    genres,
})