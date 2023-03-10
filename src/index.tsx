import React from 'react';
import ReactDOM from 'react-dom';
import {App} from 'App';
import reportWebVitals from './reportWebVitals';
import {Provider, RootStateOrAny} from 'react-redux';
import {store} from './store/index'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
