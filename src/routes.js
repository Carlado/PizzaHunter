import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Splash from './components/splash';
import VenuePage from './components/venue_page';
import Results from './components/results';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Splash} />
    <Route path="/results" component={Results} />
    <Route path="/venue/:id" component={VenuePage} />
  </Route>
);
