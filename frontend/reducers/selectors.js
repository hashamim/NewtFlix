import { isEqual } from "lodash";
import { createSelector } from 'reselect';

export const genresSelector = (state) => (
    Object.values(state.entities.genres)
)

export const searchSelector = (state) => (
    state.ui.search.map((id) => state.entities.shows[id])
)

const getShowGenres = (state, props) => state.entities.shows[props.id].genre_ids;
const getGenreNames = state => state.entities.genres;
export const makeSelectGenre = () => createSelector(
    [getShowGenres, getGenreNames],
    (showGenreIds=[], genres) => {
        return showGenreIds.map( id => ({
            id,
            name: genres[id].name,
        }))
    }
)
const getShowIds = state => state.entities.shows.allIds;
export const selectBrowseShows = createSelector(
    [getShowIds],
    (showIds) => {
        const test = showIds.map(id => {return { id }});
        return test;
    }
)
