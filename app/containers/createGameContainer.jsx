import { connect } from 'react-redux';
import { createGame } from '../action-creators.js';
import CreateGame from '../components/CreateGame';

const mapStateToProps = (state) => {
  return {
    game: state.game,
    users: state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    creatingGame: (game) => {
      dispatch(createGame(game))
    }
  }
}


export const CreateGameContainer = connect(mapStateToProps, mapDispatchToProps)(CreateGame);