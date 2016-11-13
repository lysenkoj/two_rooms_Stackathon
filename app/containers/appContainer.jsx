import { connect } from 'react-redux';
import { createGame, createLobby } from '../action-creators.js';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}
const mapDispatchToProps = (game) => {
  return {
    creatingGame: () => {
      dispatch(createGame(game))
    },
    creatingLobby: () => {
      dispatch(createLobby(game))
    }
  }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);