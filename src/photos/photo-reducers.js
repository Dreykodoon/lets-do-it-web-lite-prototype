import { ADD_PHOTO } from './photo-actions';

export function reducers(state, {type, payload}) {
    const { photos } = state;
    switch (type) {
        case ADD_PHOTO: {
            state.photos = photos.concat([payload]); 
            return state;
        }
        default: {
            return state;
        }
    }
}