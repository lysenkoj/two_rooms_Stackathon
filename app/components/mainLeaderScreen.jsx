import React, { Component } from 'react';
import RoundTracker from './RoundTracker';
import {TimerContainer} from '../containers/TimerContainer';
import Toggle from './Toggle';
import RevealButtons from './RevealButtons'

export default class MainLeader extends Component {

  render() {
    return (
      <div className='outer'>
        <TimerContainer />
        <RoundTracker />
        <Toggle/>
        <div className="filler">
          <button onClick={()=>this.props.displayingLeaderInfo({leaderInfo: true})}
          id="leaderInfo" type="button">Leader info</button>
        </div>
        <RevealButtons/>
      </div>
    );
  }
}
