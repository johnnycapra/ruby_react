import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return Object.assign({}, oldState, action.users);
        case RECEIVE_USER:
            let nextState1 = Object.assign({}, oldState);
            let usersState1 = Object.assign({}, oldState['users']);
            usersState1[action.user.id] = action.user
            nextState1['users'] = usersState1;
            return nextState1;
        default:
            return oldState;
        };
    };

export default usersReducer;