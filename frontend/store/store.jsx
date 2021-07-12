import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const configureStore = () => (
    createStore(RootReducer, applyMiddleware(thunk))
);

export default configureStore; 