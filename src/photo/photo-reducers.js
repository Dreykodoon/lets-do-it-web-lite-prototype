import { ADD_PHOTO_ID, LOAD_PHOTOS, DELETE_PHOTOS } from './photo-actions';

const initialState = {photos: [], photoIds: []};

export function reducers(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_PHOTO_ID: {
            return state;
        }
        case LOAD_PHOTOS: {
            const photoIds = state.photos.map((photo) => photo.id);
            return Object.assign({}, state, {photos: payload, photoIds});
        }
        case DELETE_PHOTOS: {
            return Object.assign({}, initialState);
        }
        default: {
            return state;
        }
    }
}
