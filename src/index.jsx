import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx';
import Reducers from './reducers';
import download from './middleware/download.js';

let store = createStore(
  Reducers,
  applyMiddleware(download)
);

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
   document.getElementById('root')
 );
