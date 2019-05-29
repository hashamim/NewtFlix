import * as SessionApiUtils from '../utils/session_api_utils';
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

//action creators
export const receiveUser = ({user, session}) => ({
    type: RECEIVE_USER,
    user,
    session,
});

export const removeUser = () => ({
    type: REMOVE_USER,
});

//error action creators
export const receiveSessionErrors = ({errors}) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
}) 
//thunk action creators
export const login = (formUser) => dispatch => (
    SessionApiUtils.createSession(formUser).then((response) => dispatch(receiveUser(response)), testFunc)
);

export const signup = (formUser) => dispatch => (
    SessionApiUtils.createUser(formUser).then(response => dispatch(receiveUser(response)), testFunc)
);

export const logout = () => dispatch => (
    SessionApiUtils.destroySession().then(() => dispatch(removeUser()), testFunc)
);

const testFunc = ({responseJSON}) => {
    debugger
    console.log(responseJSON);
}