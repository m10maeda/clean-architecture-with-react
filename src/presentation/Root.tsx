import React, { VFC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from './state';
import { AppLayout, Router } from './ui';
import './ui/reboot.css';

const store = createStore();

const Root: VFC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppLayout>
        <Router />
      </AppLayout>
    </BrowserRouter>
  </Provider>
);

export default Root;
