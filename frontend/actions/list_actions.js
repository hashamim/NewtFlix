import * as ListApiUtils from '../utils/list_api_utils';
export const RECEIVE_LIST_ITEM = "RECEIVE_LIST_ITEM";
export const REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM";

export const receiveListItem = (showId) => ({
    type: RECEIVE_LIST_ITEM,
    showId,
})

export const removeListItem = (showId) => ({
    type: REMOVE_LIST_ITEM,
    showId,
})

export const createListItem = (showId) => dispatch => (
    ListApiUtils.postListItem(showId).then(({show_id}) => dispatch(receiveListItem(show_id)))
)

export const destroyListItem = (showId) => dispatch => (
    ListApiUtils.deleteListItem(showId).then(() => dispatch(removeListItem(showId)))
)