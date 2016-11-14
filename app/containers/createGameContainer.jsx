import { connect } from 'react-redux';
import { joinLobby, createLobby } from '../action-creators.js';
import CreateGame from '../components/CreateGame';

const mapStateToProps = (state) => {
  return {
    gameId: state.gameId
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    creatingGame: (game, socket) => {
      dispatch(createGame(game))
      socket.emit('createGame', function () {
      });
    },
    // generateGameId: function(){
    //     var randomFourNums = []
    //     for (var i = 0; i < 4; i++) {
    //         randomFourNums.push(Math.floor(Math.random() * 10))
    //     }
    //     console.log("randomFourNums: ", randomFourNums.join(""));
    //     return false
    // }
  }
}


export const IntroScreenContainer = connect(mapStateToProps, mapDispatchToProps)(CreateGame);
