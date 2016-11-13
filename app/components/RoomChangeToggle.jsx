import React, { Component } from 'react';

//this.props.currentRoom (to display on slider)
//onClick(socket.emit --> roomChange)

export default class RoomChangeToggle extends Component {

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
