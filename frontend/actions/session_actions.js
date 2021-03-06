import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER, 
    user
})

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const signup = (user) => dispatch => (
    SessionApiUtil.signUp(user)
    .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
); 

export const login = (user) => dispatch => (
    SessionApiUtil.logIn(user)
    .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const logout = () => dispatch => (
    SessionApiUtil.logOut()
    .then(
        () => dispatch(logoutCurrentUser()),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
);