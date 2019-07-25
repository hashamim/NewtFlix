import { isEqual } from "lodash";
import { createSelector } from 'reselect';

export const genresSelector = (state) => (
    Object.values(state.entities.genres)
)

export const searchSelector = (state) => (
    state.ui.search.map((id) => state.entities.shows[id])
)

const getShowGenres = (state, props) => state.entities.shows[props.show.id].genre_ids;
const getGenreNames = state => state.entities.genres;
export const makeSelectGenre = () => createSelector(
    [getShowGenres, getGenreNames],
    (showGenreIds=[], genres) => {
        debugger
        return showGenreIds.map( id => ({
            id,
            name: genres[id].name,
        }))
    }
)
