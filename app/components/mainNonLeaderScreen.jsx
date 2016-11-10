import React, { Component } from 'react';
import RoundTracker from './RoundTracker';
import Timer from './Timer';
import Toggle from './Toggle';
import RevealButtons from './RevealButtons'

export default class MainNonLeader extends Component {

  render() {
    return (
      <div className='outer'>
        <Timer />
        <RoundTracker />
        <Toggle/>
        <div className="filler" />
        <RevealButtons/>
      </div>
    );
  }
}
