export const postListItem = (showId) => $.ajax({
    method: 'POST',
    url: 'api/list',
    data: {
        show_id: showId
    }
})

export const deleteListItem = (showId) => $.ajax({
    method: 'DELETE',
    url: 'api/list',
    data: {
        show_id: showId
    }
})