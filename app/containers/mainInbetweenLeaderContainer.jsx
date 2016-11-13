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
    startingRound: (game) => {
      dispatch(startRound(game))
    const socket = io()
    socket.on('connect',()=>{
      socket.emit('nextRound', ()=>{
        console.log("EMIT FORM FRONT END")
      })
    })
    }
  }
}


export const MainInbetweenLeaderContainer = connect(mapStateToProps, mapDispatchToProps)(MainInbetweenLeader);

// var socket = io(window.location.origin);

// socket.on('connect', function(){

//   console.log('I have made a persistent two-way connection to the server!');


//   // the draw event is emitted in whiteboard.js and caught here
//   whiteboard.on('draw', function toBeRunOnlyOnDraw(start, end, color){
//       socket.emit('imDrawing', start, end, color)
//   })

//   socket.on('otherDraw', function(start, end, color){
//     whiteboard.draw(start, end, color)
//   })

// })