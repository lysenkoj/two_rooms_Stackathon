import { connect } from 'react-redux';

import { createLobby, createGame } from '../action-creators.js';
import CreateGame from '../components/CreateGame';

const mapStateToProps = (state) => {
  return {
    game: state.game,   //    gameId: state.gameId
    users: state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    creatingLobby: (game, socket) => {
        dispatch(createLobby(game))
        // console.log("game from create lobby", game);
        socket.emit('createdGameLobbyId', game);
    },
    creatingGame: (game) => {
      dispatch(createGame(game))
    }
  }
}



export const CreateGameContainer = connect(mapStateToProps, mapDispatchToProps)(CreateGame);
