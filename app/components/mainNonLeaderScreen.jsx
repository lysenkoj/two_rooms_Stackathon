import React, { Component } from 'react';
import RoundTracker from './RoundTracker';
import Timer from './Timer';
import Toggle from './Toggle';

export default class MainNonLeader extends Component {

  render() {
    return (
      <div className='outer'>
        <Timer />
        <RoundTracker />
        <Toggle/>
      </div>
    );
  }
}
