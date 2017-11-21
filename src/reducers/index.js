import { combineReducers } from 'redux';
import page from './page.js';
import photos from './photos.js';

const photoframeApp = combineReducers({
  page,
  photos
});

export default photoframeApp;
