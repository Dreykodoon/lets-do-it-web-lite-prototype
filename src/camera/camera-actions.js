import localForage from 'localforage';
import { generatePhotoId } from './utils';

export const ADD_PHOTO_ID = 'ADD_PHOTO_ID';

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