import React, { Component } from 'react';


export default class CreateGame extends Component {

  render() {
    return (
      <div className='outer'>
        <h1>Lobby Number: #{`${lobbyID}`}</h1>
        <button>CREATE</button>
      </div>
    );
  }
}