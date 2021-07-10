import React, { VFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as pages from './pages';

const Router: VFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={pages.HomePage} />
      <Route exact path="/users" component={pages.UserListPage} />
      <Route exact path="/users/new" component={pages.UserRegisterPage} />
      <Route exact path="/users/:id" component={pages.UserDetailPage} />
      <Route exact path="/circles" component={pages.CircleListPage} />
      <Route exact path="/circles/new" component={pages.CircleRegisterPage} />
      <Route exact path="/circles/:id" component={pages.CircleDetailPage} />
      <Route path="*" component={pages.NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
