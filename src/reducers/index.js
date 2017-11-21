import { combineReducers } from 'redux';
import page from './page.js';
import photos from './photos.js';
import processedPhotos from './processedPhotos.js';

const photoframeApp = combineReducers({
  page,
  photos,
  processedPhotos
});

export default photoframeApp;
