import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';

const content = document.querySelector('#content');

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  content
);
