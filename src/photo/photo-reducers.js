import { ADD_PHOTO_ID, LOAD_PHOTOS } from './photo-actions';

export function reducers(state = {photos: [], photoIds: []}, {type, payload}) {
    switch (type) {
        case ADD_PHOTO_ID: {
            const { photoIds } = state;
            return Object.assign({}, state, {photoIds: photoIds.concat([payload])});
        }
        case LOAD_PHOTOS: {
            const photoIds = state.photos.map((photo) => photo.id);
            return Object.assign({}, state, {photos: payload, photoIds});
        }
        default: {
            return state;
        }
    }
}
