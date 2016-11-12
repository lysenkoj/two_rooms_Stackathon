import React, { Component } from 'react';
import RevealButtons from './RevealButtons';
import Timer from './Timer';


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
        <Timer />
        <div className="filler"/>
        <RevealButtons/>
      </div>
    );
  }
}