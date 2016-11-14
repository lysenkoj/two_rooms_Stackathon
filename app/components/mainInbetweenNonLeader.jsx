import React, { Component } from 'react';
import RoundTracker from './RoundTracker';
import {TimerContainer} from '../containers/TimerContainer';
import {RoomToggleContainer} from '../containers/RoomToggleContainer';

export default class MainInbetweenNonLeader extends Component {

  render() {
    return (
      <div className='outer'>
        <TimerContainer />
        <RoundTracker />
        <div id="roomAssign" className="filler">
          <h1>ROOM</h1>
          <RoomToggleContainer />
        </div>
      </div>
    );
  }
}