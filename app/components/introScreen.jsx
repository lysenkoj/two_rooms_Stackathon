import React, { Component } from 'react';
import {Link} from 'react-router';


export default class IntroScreen extends Component {

  render() {
    return (
      <div className='outer gray'>
      <Link to="/CreateGameContainer">
        <button onClick={()=>this.props.creatingLobby({activeLobby: true}, this.props.game.socket)} >CREATE</button>
      </Link>
      <Link to="/Join">
        <button>JOIN</button>
      </Link>
      </div>
    );
  }
}