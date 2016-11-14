import React, { Component } from 'react';
import RevealButtons from './RevealButtons';
import {TimerContainer} from '../containers/TimerContainer';


export default class RoleRevealBlue extends Component {

  render() {
    return (
      <div className='outer blue'>
        <TimerContainer />
        <div id="description" className="filler">
          <h3>BOMBER</h3>
          <p>THIS IS WHAT THE BOMBER DOES</p>
          <p>THIS IS ALSO WHAT THE BOMBER DOES</p>
        </div>
        <RevealButtons/>
      </div>
    );
  }
}