import React, { Component } from 'react';
import RoundTracker from './RoundTracker';
import Timer from './Timer';

export default class Vote extends Component {

  render() {
    return (
      <div className='outer'>
        <Timer />
        <RoundTracker />
        <div id="startRound" className="filler">
          <button type="button"></button>
        </div>
      </div>
    );
  }
}