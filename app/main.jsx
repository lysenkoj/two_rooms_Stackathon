'use strict'
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store';

import MainNonLeaderScreen from './components/mainNonLeaderScreen';
import MainLeaderScreen from './components/mainLeaderScreen';
import ColorRevealBlue from './components/ColorRevealBlue';
import ColorRevealRed from './components/ColorRevealRed';
import RoleRevealBlue from './components/RoleRevealBlue';
import RoleRevealRed from './components/RoleRevealRed';
import MainInbetweenNonLeader from './components/mainInbetweenNonLeader';
import MainInbetweenLeader from './components/mainInbetweenLeader';
import Vote from './components/Vote';
import StartScreen from './components/StartScreen';



render (
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={MainLeaderScreen} />
            <Route path="MainNonLeader" component={MainNonLeaderScreen} />
            <Route path="MainLeader" component={MainLeaderScreen} />
            <Route path="ColorRevealBlue" component={ColorRevealBlue} />
            <Route path="ColorRevealRed" component={ColorRevealRed} />
            <Route path="RoleRevealBlue" component={RoleRevealBlue} />
            <Route path="RoleRevealRed" component={RoleRevealRed} />
            <Route path="MainInbetweenNonLeader" component={MainInbetweenNonLeader} />
            <Route path="MainInbetweenLeader" component={MainInbetweenLeader} />
            <Route path="Vote" component={Vote}/>
            <Route path="Start" component={StartScreen}/>

    </Router>
  </Provider>,
  document.getElementById('main')
)
