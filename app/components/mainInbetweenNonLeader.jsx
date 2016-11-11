import React, { Component } from 'react';
import RoundTracker from './RoundTracker';
import Timer from './Timer';
import Toggle from './Toggle';

export default class MainInbetweenNonLeader extends Component {

  render() {
    return (
      <div className='outer'>
        <Timer />
        <RoundTracker />
        <div id="roomAssign" className="filler">
          <h1>ROOM</h1>
          <Toggle/>
        </div>
      </div>
    );
  }
}