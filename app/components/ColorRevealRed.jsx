import React, { Component } from 'react';
import RevealButtons from './RevealButtons';
import {TimerContainer} from '../containers/TimerContainer';


export default class ColorRevealRed extends Component {
  constructor(props){
    super(props)
    this.state = {
      player:{
        color: "red"
      }
    }
  }

  render() {
    return (
      <div className='outer red'>
        <TimerContainer />
        <div className="filler"/>
        <RevealButtons/>
      </div>
    );
  }
}