import React, { Component } from 'react';
import RevealButtons from './RevealButtons';
import Timer from './Timer';


export default class ColorReveal extends Component {

  render() {
    return (
      <div className='outer'>
        <Timer />
        <div className="filler">
        </div>
        <RevealButtons/>
      </div>
    );
  }
}