import { connect } from 'react-redux';
import IntroScreen from '../components/introScreen';

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

export const IntroScreenContainer = connect(mapStateToProps, {})(IntroScreen);