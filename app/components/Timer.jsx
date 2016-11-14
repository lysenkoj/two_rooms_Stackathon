import React, { Component } from 'react';

export default class Timer extends Component {

  render() {
    return (
      <div className='timer'>
        <div className='timebox'>
          <img className="numbers" src="stylesheets/zero.svg"/>
        </div>
        <div className='timebox'>
          <img className="numbers" src="stylesheets/colon.svg"/>
        </div>
        <div className='timebox'>
          <img className="numbers" src="stylesheets/zero.svg"/>
        </div>
        <div className='timebox'>
          <img className="numbers" src="stylesheets/five.svg"/>
        </div>
      </div>
    );
  }
}
