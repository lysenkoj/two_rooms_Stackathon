import React, { Component } from 'react';
import RoundTracker from './RoundTracker';
import Timer from './Timer';
import LeaderVoteToggle from './LeaderVoteToggle';
import RevealButtons from './RevealButtons'

export default class MainNonLeader extends Component {

  render() {
    return (
      <div className='outer'>
        <Timer />
        <RoundTracker />
        <LeaderVoteToggle/>
        <div className="filler" />
        <RevealButtons/>
      </div>
    );
  }
}
