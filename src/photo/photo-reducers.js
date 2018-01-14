import { ADD_PHOTO, LOAD_PHOTOS, DELETE_PHOTOS } from './photo-actions';

const initialState = {photos: []};

export function reducers(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_PHOTO: {
            return Object.assign({}, state, {photos: state.photos.concat([payload])});
        }
        case LOAD_PHOTOS: {
            return Object.assign({}, state, {photos: payload});
        }
        case DELETE_PHOTOS: {
            return Object.assign({}, initialState);
        }
        default: {
            return state;
        }
    }
}
