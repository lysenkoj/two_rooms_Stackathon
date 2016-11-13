import { connect } from 'react-redux';
import { createGame, createLobby } from '../action-creators.js';
import IntroScreen from '../components/introScreen';

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    creatingLobby: (game) => {
      dispatch(createLobby(game))
    }
  }
}


export const IntroScreenContainer = connect(mapStateToProps, mapDispatchToProps)(IntroScreen);