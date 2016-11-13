import React, { Component } from 'react';
import { IntroScreenContainer } from '../containers/introScreenContainer';
import {MainInbetweenLeaderContainer} from '../containers/mainInbetweenLeaderContainer';

export default class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
      {
        !this.props.game.activeLobby?
        <IntroScreenContainer />:
        <MainInbetweenLeaderContainer />
      }
      </div>
    );
  }
}


// {
  // <CreateGameContainer />
  // <JoinGameContainer />
  // <MainInbetweenLeaderContainer />
  // <MainInbetweenNonLeaderContainer />
  // <MainLeaderScreenContainer />
  // <MainNonLeaderScreenContainer />
  // <RevealButtonsContainer />

// }