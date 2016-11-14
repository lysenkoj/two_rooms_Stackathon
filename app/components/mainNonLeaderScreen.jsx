import React, { Component } from 'react';
import RoundTracker from './RoundTracker';
import {TimerContainer} from '../containers/TimerContainer';
import Toggle from './Toggle';
import RevealButtons from './RevealButtons'

export default class MainNonLeader extends Component {

  render() {
    return (
      <div className='outer'>
        <TimerContainer />
        <RoundTracker />
        <Toggle/>
        <div className="filler" />
        <RevealButtons/>
      </div>
    );
  }
}
