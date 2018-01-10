import localForage from 'localforage';

export const LOAD_PHOTOS = 'LOAD_PHOTOS';

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