import React, { Component } from 'react';
import RoundTracker from './RoundTracker';
import Timer from './Timer';

export default class MainInbetweenLeader extends Component {

  render() {
    return (
      <div className='outer'>
        <Timer />
        <RoundTracker />
        <div id="startRound" className="filler">
          <h1>ROUND 2</h1>
          <button type="button">START</button>
        </div>
      </div>
    );
  }
}