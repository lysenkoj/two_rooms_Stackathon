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
import JoinGame from './components/JoinGame';
import CreateGame from './components/CreateGame';
import IntroScreen from './components/introScreen';
import {AppContainer} from './containers/appContainer';



render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} />
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
      <Route path="Join" component={JoinGame}/>
      <Route path="Create" component={CreateGame}/>
      <Route path="Intro" component={IntroScreen}/>
    </Router>
  </Provider>,
  document.getElementById('main')
)
