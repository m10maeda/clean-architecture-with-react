import React, { VFC } from 'react';
import { Provider } from 'react-redux';
import { createStore } from './state';
import { Router } from './ui';
import './ui/reboot.css';

const store = createStore();

const Root: VFC = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default Root;
