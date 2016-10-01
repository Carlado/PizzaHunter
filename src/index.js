import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import {Router, browserHistory} from 'react-router';
import reducers from './reducers';
import routes from './routes';
import ReduxPromise from 'redux-promise';


let store = createStore(reducers, compose(applyMiddleware(ReduxPromise),
            window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.main'));
