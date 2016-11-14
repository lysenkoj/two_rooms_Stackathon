import React, { Component } from 'react';
import {Link} from 'react-router';
import inbetweenLeader from './mainInbetweenLeader';

export default class StartScreen extends Component {
  render() {
    return (
      <div className='outer gray'>
      <Link to="/MainNonLeader">
        <button onClick={()=>{this.props.startingGame({gameIsPlaying: true}, this.props.game.socket)
      }
        } type="button">START GAME</button>
        </Link>
      </div>
    );
  }
}