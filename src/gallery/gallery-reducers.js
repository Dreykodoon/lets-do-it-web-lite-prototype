import { LOAD_PHOTOS } from './gallery-actions';

export function reducers(state, {type, payload}) {
    switch (type) {
        case LOAD_PHOTOS: {
            state.photos = payload; 
            return Object.assign({}, state, {photos: payload});
        }
        default: {
            return state;
        }
    }
}