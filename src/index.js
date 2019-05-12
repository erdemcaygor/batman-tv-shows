// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './modules/store'
import './styles/main.scss';

import App from './App';

const store = configureStore()

ReactDOM.hydrate(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
