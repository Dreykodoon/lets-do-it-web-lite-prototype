import localforage from 'localforage';
import { generatePhotoId } from './utils';

export const ADD_PHOTO_ID = 'ADD_PHOTO_ID';
export const LOAD_PHOTOS = 'LOAD_PHOTOS';
export const DELETE_PHOTOS = 'DELETE_PHOTOS';

export function addPhoto(photoSrc) {
    const photoId = generatePhotoId();
    localforage.setItem(photoId, {id: photoId, src: photoSrc})
        .then(() => console.log('Photo persisted succesfully!'))
        .catch(err => console.log(err));
    return {
        type: ADD_PHOTO_ID,
        payload: photoId,
    };
}

export function loadPhotos() {
    return (dispatch) => {
        let photos = [];
        localforage.iterate(value => photos.push(value))
            .then(() => dispatch({
                type: LOAD_PHOTOS,
                payload: photos,
            }))
            .catch(err => console.log(err));
    };
}

export function deletePhotos(photos) {
    return (dispatch) => {
        const photoIds = photos.map((photo) => photo.id);
        Promise.all(photoIds.map((photoId) => localforage.removeItem(photoId)))
            .then(() => dispatch({
                type: DELETE_PHOTOS,
            }))
            .catch((err) => {
                // TODO: something needs to be done if removal of all photos was unsuccesfull.
                console.log(err);
            });
    };
}
