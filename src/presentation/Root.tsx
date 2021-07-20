import React, { VFC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from './state';
import { AppLayout, Router } from './ui';
import './ui/reboot.css';

type Props = {
  store: ReturnType<typeof createStore>;
};

const Root: VFC<Props> = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <AppLayout>
        <Router />
      </AppLayout>
    </BrowserRouter>
  </Provider>
);

export default Root;
