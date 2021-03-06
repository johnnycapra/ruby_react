import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import sessionReducer from './session_reducer';


const RootReducer = combineReducers({
    users: usersReducer,
    session: sessionReducer
});

export default RootReducer; 