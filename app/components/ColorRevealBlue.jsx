import React, { Component } from 'react';
import RevealButtons from './RevealButtons';
import {TimerContainer} from '../containers/TimerContainer';


export default class ColorRevealBlue extends Component {
  constructor(props){
    super(props)
    this.state = {
      player:{
        color: "blue"
      }
    }
  }

  render() {
    return (
      <div className='outer blue'>
        <TimerContainer/>
        <div className="filler"/>
        <RevealButtons/>
      </div>
    );
  }
}