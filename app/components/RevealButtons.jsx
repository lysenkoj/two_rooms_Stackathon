import React, { Component } from 'react';

export default class RevealButtons extends Component {

  render() {
    return (
      <div className='RevealButtonsContainer'>
        <button type="button" className="RevealButton" id="btn1" >
            <div className="tempBtn" />
        </button>
        <button type="button" className="RevealButton" id="btn2" >
            <div className="tempBtn" />
        </button>
      </div>
    );
  }
}
