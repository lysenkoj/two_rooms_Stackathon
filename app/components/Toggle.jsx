import React, { Component } from 'react';

export default class Toggle extends Component {

  render() {
    return (
      <div className='toggle'>
        <label className="switch">
          <input type="checkbox"/>
          <div className="slider">
              <p>B</p>
          </div>
        </label>
      </div>
    );
  }
}
