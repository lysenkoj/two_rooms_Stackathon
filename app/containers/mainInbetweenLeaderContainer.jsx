import { connect } from 'react-redux';
import { startRound } from '../action-creators.js';
import MainInbetweenLeader from '../components/mainInbetweenLeader';

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    startingRound: (game, socket) => {
      dispatch(startRound(game))
      socket.emit('nextRound',()=>{
      })
    }
  }
}



export const MainInbetweenLeaderContainer = connect(mapStateToProps, mapDispatchToProps)(MainInbetweenLeader);