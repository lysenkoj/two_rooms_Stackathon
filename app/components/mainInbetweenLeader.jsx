import React, { Component } from 'react';
import RoundTracker from './RoundTracker';
import Timer from './Timer';

export default class MainInbetweenLeader extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className='outer'>
        <Timer />
        <RoundTracker />
        <div id="startRound" className="filler">
          <h1>ROUND 2</h1>
          <button onClick={()=>{this.props.startingRound({roundIsPlaying: true}, this.props.game.socket)
      }
        } type="button">START</button>
        </div>
      </div>
    );
  }
}