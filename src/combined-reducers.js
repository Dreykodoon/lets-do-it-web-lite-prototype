import { combineReducers } from 'redux';
import { reducers as cameraReducers } from './camera/camera-reducers';
import { reducers as galleryReducers } from './gallery/gallery-reducers';

export default combineReducers({
    cameraReducers,
    galleryReducers,
});
