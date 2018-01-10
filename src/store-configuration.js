import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers as photoReducers } from './photos/photo-reducers';

export default function configureStore(initialState) {
    return createStore(photoReducers, initialState, applyMiddleware(thunk));
}