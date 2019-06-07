export const indexShows = () => $.ajax({
    method: "GET",
    url: "/api/shows",
})

export const showShow = (id) => $.ajax({
    method: "GET",
    url: `api/shows/${id}`,
})

export const searchShows = (paramString) => $.ajax({
    method: "GET",
    url: `api/searches/${paramString}`,
})