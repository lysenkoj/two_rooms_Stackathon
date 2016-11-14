import { connect } from 'react-redux';
import { colorReveal, roleReveal } from '../action-creators.js';
import RoomToggle from '../components/RoomToggle';

const mapStateToProps = (state) => {
  return {
    game: state.game,
    users: state.users,
    revealer: state.revealer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    revealingColor: (revealColor) => {
      dispatch(colorReveal(revealColor))
    },
    revealingRole: (revealRole) => {
      dispatch(roleReveal(revealRole))
    }
  }
}



export const RoomToggleContainer = connect(mapStateToProps, mapDispatchToProps)(RoomToggle);