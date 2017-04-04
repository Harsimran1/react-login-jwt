import React from 'react';
import { Route, IndexRoute } from 'react-router';
import cookie from 'react-cookie';


import App from './app';
import LoginPage from './login/index';
import HomePage from './home/index';

function requireAuth(nextState, replace) {
    if (!cookie.load('Authorization')) {
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
