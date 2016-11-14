import { connect } from 'react-redux';
import Timer from '../components/Timer';

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}


export const TimerContainer = connect(mapStateToProps, {})(Timer);