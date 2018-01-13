import localForage from 'localforage';
import { generatePhotoId } from './utils';

export const ADD_PHOTO_ID = 'ADD_PHOTO_ID';
export const LOAD_PHOTOS = 'LOAD_PHOTOS';

export function addPhoto(photoSrc) {
    const photoId = generatePhotoId();
    localForage.setItem(photoId, {id: photoId, src: photoSrc})
        .then(() => console.log('Photo persisted succesfully!'))
        .catch(err => console.log(err));
    return {
        type: ADD_PHOTO_ID,
        payload: photoId,
    }
}

export function getPhotos() {
    return (dispatch) => {
        let photos = [];
        localForage.iterate(value => photos.push(value))
            .then(() => dispatch(loadPhotos(photos)))
            .catch(err => console.log(err));
    }
}

function loadPhotos(photos) {
    return {
        type: LOAD_PHOTOS,
        payload: photos,
    }
}