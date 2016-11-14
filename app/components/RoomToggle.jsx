import React, { Component } from 'react';

export default class RoomToggle extends Component {

  render() {
    return (
      <div className='toggle'>
        <div>A</div>
        <label className="switch">
          <input type="checkbox"/>
          <div className="slider"/>
        </label>
        <div>B</div>
      </div>
    );
  }
}
