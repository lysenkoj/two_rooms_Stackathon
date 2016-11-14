import React, { Component } from 'react';
import {Link} from 'react-router';
import RoundTracker from './RoundTracker';
import {TimerContainer} from '../containers/TimerContainer';

export default class Vote extends Component {

  render() {
    return (
      <div className='outer gray'>
        <TimerContainer />
        <RoundTracker />
        <div id="startRound" className="filler">
        <Link to="/mainLeader">
          <button type="button" >BECOME LEADER</button>
        </Link>
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