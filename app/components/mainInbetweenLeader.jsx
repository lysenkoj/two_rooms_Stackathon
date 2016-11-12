import React, { Component } from 'react';
import RoundTracker from './RoundTracker';
import Timer from './Timer';

export default class MainInbetweenLeader extends Component {
  constructor(){
    super()

    this.leaderToggle = this.leaderToggle.bind(this);
  }
  leaderToggle(){
    socket.emit('leaderToggle', function () {
      console.log("START NEXT ROUND")
  });
  }

  render() {
    return (
      <div className='outer'>
        <Timer />
        <RoundTracker />
        <div id="startRound" className="filler">
          <h1>ROUND 2</h1>
          <button onClick={this.leaderToggle}type="button">START</button>
        </div>
      </div>
    );
  }
}