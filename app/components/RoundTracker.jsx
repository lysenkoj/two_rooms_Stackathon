import React, { Component } from 'react';

//this.props.currentRoundNumber (integer --> render accordingly with map)

export default class RoundContainer extends Component {

  render() {
    return (
      <div className='roundContainer'>
        <div id="r1" className='round' />
        <div id="r2" className='round'/>
        <div id="r3"className='round'/>
        <div id="r4" className='round'/>
        <div id="r5" className='round'/>
      </div>
    );
  }
}
