import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Toggle extends Component {

  render() {
    return (
      <div className='toggle'>
        <Link to="/Vote">
        <label className="switch">
          <input type="checkbox"/>
          <div className="slider">
              <p>B</p>
          </div>
        </label>
        </Link>
      </div>
    );
  }
}
