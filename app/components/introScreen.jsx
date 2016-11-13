import React, { Component } from 'react';


export default class IntroScreen extends Component {

  render() {
    return (
      <div className='outer'>
        <button onClick={()=>this.props.creatingLobby({activeLobby: true}, this.props.game.socket)} >CREATE</button>
        <button>JOIN</button>
      </div>
    );
  }
}