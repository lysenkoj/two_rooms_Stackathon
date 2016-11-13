import React, { Component } from 'react';

//this.state.currentPlayers ()
//onClick(voteFunction() --> redirect to selectNewLeaderPage)

export default class LeaderVoteToggle extends Component {

  render() {
    return (
      <div className='toggle'>
        <label className="switch">
          <input type="checkbox"/>
          <div className="slider">
              <p>VOTE</p>
          </div>
        </label>
      </div>
    );
  }
}
