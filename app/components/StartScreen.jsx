import React, { Component } from 'react';
import inbetweenLeader from './mainInbetweenLeader';

export default class StartScreen extends Component {
  constructor(){
    super()

    this.startGame = this.startGame.bind(this);
  }
  startGame(){
    socket.emit('startGame', function () {
    });
    this.setState({mainPage:false})
  }

  render() {
    return (
      <div className='outer'>
        <button onClick={this.startGame}type="button">START</button>
      </div>
    );
  }
}