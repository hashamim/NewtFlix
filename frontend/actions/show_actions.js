import * as ShowApiUtils from '../utils/show_api_utils';

export const RECEIVE_SHOWS = "RECEIVE_SHOWS";
export const RECEIVE_SHOW = "RECEIVE_SHOW"; 
export const RECEIVE_SEARCHED_SHOWS = "RECEIVE_SEARCHED_SHOWS";

export const receiveShows = ({shows, genres, actors}) => ({
    type: RECEIVE_SHOWS,
    shows,
    genres,
})

export const receiveShow = ({shows, genres, actors}) => ({
    type: RECEIVE_SHOW,
    shows,
    genres,
    actors,
})

export const receiveSearchedShows = ({shows, search_ids}) => {
    debugger
    return {
    type: RECEIVE_SEARCHED_SHOWS,
    shows,
    search_ids,
}}

// Thunk

export const queryShows = (queryString) => dispatch => (
    ShowApiUtils.searchShows(queryString).then((response) => dispatch(receiveSearchedShows(response)))
)

export const getShows = () => dispatch => (
    ShowApiUtils.indexShows().then((response) => dispatch(receiveShows(response)))
)

export const getShow = (id) => dispatch => (
    ShowApiUtils.showShow(id).then((response) => dispatch(receiveShow(response)))
)
