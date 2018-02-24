import { combineReducers } from 'redux';
import page from './page.js';
import photos from './photos.js';
import processedPhotos from './processedPhotos.js';
import config from './Config.js';

const photoframeApp = combineReducers({
  config,
  page,
  photos,
  processedPhotos
});

export default photoframeApp;
