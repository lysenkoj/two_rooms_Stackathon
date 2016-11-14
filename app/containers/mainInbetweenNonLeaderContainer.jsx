import { connect } from 'react-redux';
import MainInbetweenNonLeader from '../components/mainInbetweenNonLeader';

const mapStateToProps = (state) => {
  return {
    game: state.game,
    users: state.users
  }
}



export const MainInbetweenNonLeaderContainer = connect(mapStateToProps, {})(MainInbetweenNonLeader);