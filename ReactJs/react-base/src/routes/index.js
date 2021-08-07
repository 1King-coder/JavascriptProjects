import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './myRoute';
import Login from '../pages/Login';
import Page404 from '../pages/404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
