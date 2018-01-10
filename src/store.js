import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './camera/camera-reducers';

const initialState = {photos: [], photoIds: []};

const store = configureStore(initialState);

function configureStore(initialState) {
    return createStore(reducers, initialState, applyMiddleware(thunk));
}

export default store;