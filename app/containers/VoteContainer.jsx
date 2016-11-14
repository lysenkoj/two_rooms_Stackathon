import { connect } from 'react-redux';
import Vote from '../components/Vote';

const mapStateToProps = (state) => {
  return {
    game: state.game,
    users: state.users
  }
}


export const VoteContainer = connect(mapStateToProps, {})(Vote);