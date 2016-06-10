import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home';
import VenuePage from './components/venue_page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/venue/:id" component={VenuePage} />
  </Route>
);
