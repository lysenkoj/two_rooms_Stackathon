import { connect } from 'react-redux';
import { startGame } from '../action-creators.js';
import StartScreen from '../components/StartScreen';

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    startingGame: (game, socket) => {
      dispatch(startGame(game))
      socket.emit('startGame', function () {
      });
    }
  }
}


export const StartScreenContainer = connect(mapStateToProps, mapDispatchToProps)(StartScreen);