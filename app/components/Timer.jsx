import React, { Component } from 'react';

//updateTime function (socket.on)

export default class Timer extends Component {

  render() {
    return (
      <div className='timer'>
        <div className='timebox'>
          <div>img goes here</div>
        </div>
        <div className='timebox'>
          <div>img goes here</div>
        </div>
        <div className='timebox'>
          <div>img goes here</div>
        </div>
        <div className='timebox'>
          <div>img goes here</div>
        </div>
      </div>
    );
  }
}
