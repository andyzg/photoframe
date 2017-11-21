import { combineReducers } from 'redux';
import Page from './Page.js';
import Photos from './Photos.js';

const photoframeApp = combineReducers({
  Page,
  Photos
});

export default photoframeApp;
