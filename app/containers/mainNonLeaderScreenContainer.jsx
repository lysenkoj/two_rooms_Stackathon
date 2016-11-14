import { connect } from 'react-redux';
import { startRound } from '../action-creators.js';
import MainNonLeader from '../components/mainNonLeaderScreen';

const mapStateToProps = (state) => {
  return {
    game: state.game,
    users: state.users
  }
}

export const MainNonLeaderScreenContainer = connect(mapStateToProps, {})(MainNonLeader);