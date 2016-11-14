import React, { Component } from 'react';
import RoundTracker from './RoundTracker';
import {TimerContainer} from '../containers/TimerContainer';

export default class Vote extends Component {

  render() {
    return (
      <div className='outer'>
        <TimerContainer />
        <RoundTracker />
        <div id="startRound" className="filler">
          <button type="button" ></button>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     dispatch1: () =>{
//       dispatch(actionCreator)
//     }
//   }
// }