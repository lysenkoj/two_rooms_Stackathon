import React, { Component } from 'react';
import RevealButtons from './RevealButtons';
import Timer from './Timer';


export default class ColorReveal extends Component {
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
        <Timer />
        <div className="filler"/>
        <RevealButtons/>
      </div>
    );
  }
}