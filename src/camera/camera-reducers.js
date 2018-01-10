import { ADD_PHOTO_ID } from './camera-actions';

export function reducers(state, {type, payload}) {
    switch (type) {
        case ADD_PHOTO_ID: {
            const { photoIds } = state;
            return Object.assign({}, state, {photoIds: photoIds.concat([payload])});
        }
        default: {
            return state;
        }
    }
}