export const genresSelector = (state) => (
    Object.values(state.entities.genres)
)

export const searchSelector = (state) => (
    state.ui.search.map((id) => state.entities.shows[id])
)