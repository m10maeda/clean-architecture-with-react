import React, { VFC } from 'react';
import { Provider } from 'react-redux';
import createStore from '../state/createStore';
import Router from './Router';

const store = createStore();

const Root: VFC = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default Root;
