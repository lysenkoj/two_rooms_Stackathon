import { connect } from 'react-redux';
import { startRound } from '../action-creators.js';
import MainLeaderScreen from '../components/mainLeaderScreen';

const mapStateToProps = (state) => {
  return {
    game: state.game,
    leaderInfo: state.leaderInfo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    displayingLeaderInfo: (leaderInfo) => {
      dispatch(displayLeaderInfo(leaderInfo))
    }
  }
}



export const MainLeaderScreenContainer = connect(mapStateToProps, mapDispatchToProps)(MainLeaderScreen);