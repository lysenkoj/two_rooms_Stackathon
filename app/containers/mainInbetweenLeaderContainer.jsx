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
      console.log("socket", socket)
      socket.emit('nextRound',()=>{
        console.log("EMIT!!")
      })
    }
  }
}



export const MainInbetweenLeaderContainer = connect(mapStateToProps, mapDispatchToProps)(MainInbetweenLeader);