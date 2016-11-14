import { connect } from 'react-redux';
import { switchRoom } from '../action-creators.js';
import RoomToggle from '../components/RoomToggle';

const mapStateToProps = (state) => {
  return {
    game: state.game,
    users: state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    switchingRoom: (user) => {
      dispatch(switchRoom(game))
    }
  }
}



export const RoomToggleContainer = connect(mapStateToProps, mapDispatchToProps)(RoomToggle);