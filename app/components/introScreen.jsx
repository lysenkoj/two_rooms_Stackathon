import React, { Component } from 'react';


export default class IntroScreen extends Component {

  render() {
    return (
      <div className='outer'>
        <button onClick={()=>this.props.creatingLobby({activeLobby: true})} >CREATE</button>
        <button>JOIN</button>
      </div>
    );
  }
}