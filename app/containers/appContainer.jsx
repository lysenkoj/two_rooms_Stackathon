import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}


export const AppContainer = connect(mapStateToProps, {})(App);