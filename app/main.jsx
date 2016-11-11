'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store';

import MainNonLeaderScreen from './components/mainNonLeaderScreen';
import MainLeaderScreen from './components/mainLeaderScreen';
import ColorReveal from './components/ColorReveal';
import RoleReveal from './components/RoleReveal';
import MainInbetweenNonLeader from './components/mainInbetweenNonLeader';
import MainInbetweenLeader from './components/mainInbetweenLeader';
import Vote from './components/Vote';



render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainInbetweenLeader}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
