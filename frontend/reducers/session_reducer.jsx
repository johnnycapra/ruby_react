import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullSession = {
    id: null, 
}

const sessionReducer = (oldState = _nullSession, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            localStorage.setItem('userId', action.user.data.id);
            return Object.assign({}, oldState, {id: action.user.data.id})
        case LOGOUT_CURRENT_USER: 
            localStorage.removeItem('userId');
            return Object.assign({}, oldState, { id: null} );
        default:
            return oldState; 
    }
}

export default sessionReducer;