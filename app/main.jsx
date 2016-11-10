'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store';

import MainNonLeaderScreen from './components/mainNonLeaderScreen';



render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainNonLeaderScreen}>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
