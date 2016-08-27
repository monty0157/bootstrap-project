import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../../ui/layouts/App';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path='site' />
    </Route>
  </Router>
);
