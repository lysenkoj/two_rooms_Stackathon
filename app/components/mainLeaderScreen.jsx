import React, { Component } from 'react';
import RoundTracker from './RoundTracker';
import Timer from './Timer';
import Toggle from './Toggle';
import RevealButtons from './RevealButtons'

export default class MainLeader extends Component {

  render() {
    return (
      <div className='outer'>
        <Timer />
        <RoundTracker />
        <Toggle/>
        <div className="filler">
          <button id="leaderInfo" type="button">Leader info</button>
        </div>
        <RevealButtons/>
      </div>
    );
  }
}
