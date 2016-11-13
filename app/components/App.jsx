import React, { Component } from 'react';
import { IntroScreenContainer } from '../containers/introScreenContainer'

export default class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <IntroScreenContainer />
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