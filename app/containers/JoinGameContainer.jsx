import { connect } from 'react-redux';
import { joinGame } from '../action-creators.js';
import JoinGame from '../components/JoinGame';

const mapStateToProps = (state) => {
  return {
    game: state.game,
    users: state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    joiningGame: (game) => {
      dispatch(joinGame(game))
    }
  }
}


export const JoinGameContainer = connect(mapStateToProps, mapDispatchToProps)(JoinGame);