import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {isAuthenticated} from '../services/authentication'


import App from './app';
import LoginPage from './login/index';
import HomePage from './home/index';

function requireAuth(nextState, replace) {
    if (!isAuthenticated()) {
        replace({
            pathname: '/login'
        })
    }
}

export default (
  <Route path="/" component={App}>
      <IndexRoute component={HomePage} onEnter={requireAuth}/>
      <Route path="login" component={LoginPage} />
  </Route>
);
