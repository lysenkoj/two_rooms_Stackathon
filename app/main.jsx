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
import {VoteContainer} from './containers/VoteContainer';
import {Main} from './components/JoinGame';
import {MainInbetweenLeaderContainer} from './containers/mainInbetweenLeaderContainer';
import {IntroScreenContainer} from './containers/introScreenContainer';
import {CreateGameContainer} from './containers/createGameContainer';
import {StartScreenContainer} from './containers/StartScreenContainer';
import {MainNonLeaderScreenContainer} from './containers/mainNonLeaderScreenContainer';
import {MainLeaderScreenContainer} from './containers/mainLeaderScreenContainer';



render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={IntroScreenContainer} />
      <Route path="/MainInbetweenLeaderContainer" component={MainInbetweenLeaderContainer} />
      <Route path="/CreateGameContainer" component={CreateGameContainer} />
      <Route path="/StartScreenContainer" component={StartScreenContainer} />
      <Route path="/MainNonLeader" component={MainNonLeaderScreenContainer} />
      <Route path="/Vote" component={VoteContainer} />
      <Route path="/MainLeader" component={MainLeaderScreenContainer} />
      <Route path="/RedTeam" component={ColorRevealRed} />
      <Route path="/RoleRevealRed" component={RoleRevealRed} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
