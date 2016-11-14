import { connect } from 'react-redux';

import { createGame } from '../action-creators.js';
import CreateGame from '../components/CreateGame';

const mapStateToProps = (state) => {
  return {
    game: state.game,   //    gameId: state.gameId
    users: state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    generateGameId: function(){
        var randomFourNums = []
        for (var i = 0; i < 4; i++) {
            randomFourNums.push(Math.floor(Math.random() * 10))
        }
        console.log("randomFourNums: ", randomFourNums.join(""));
    }
    creatingGame: (game) => {
      dispatch(createGame(game))
    }
  }
}



export const CreateGameContainer = connect(mapStateToProps, mapDispatchToProps)(CreateGame);
