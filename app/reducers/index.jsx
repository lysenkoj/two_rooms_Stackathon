import { combineReducers } from 'redux';
import {
  JOIN_GAME,
  CREATE_GAME,
  JOIN_LOBBY,
  CREATE_LOBBY,
  COLOR_REVEAL,
  ROLE_REVEAL,
  START_NEXT_ROUND,
  SELECT_ROOM,
  DISPLAY_LEADER_INFO,
  SELECT_LEADER,
  CALL_FOR_NEW_LEADER,
  START_GAME
} from '../action-creators.js';

const gameInitialState = {
    round: 0,
    gameIsPlaying: false,
    roundIsPlaying: false,
    activeLobby: false,
    socket: io()
}


export const userReducer = (state = [], action) => {
  switch (action.type) {
    case JOIN_GAME:
      return action.user;
    case JOIN_LOBBY:
      return action.user;
    case SELECT_LEADER:
      return action.user;
    default:
      return state;
  }
}

export const gameReducer = (state = gameInitialState, action) => {
  switch (action.type) {
    case CREATE_GAME:
      return Object.assign({}, state, {round: action.game.round})
    case CREATE_LOBBY:
      return Object.assign({}, state, {activeLobby: action.game.activeLobby, lobbyId: action.game.lobbyId} )
    case START_GAME:
      return Object.assign({}, state, {gameIsPlaying: action.game.gameIsPlaying})
    case START_NEXT_ROUND:
      return Object.assign({}, state, {roundIsPlaying: action.game.roundIsPlaying})
    default:
      return state;
  }
}


export const revealReducer = (state = {}, action) => {
  switch (action.type) {
    case COLOR_REVEAL:
      return Object.assign({}, state, {revealColor: action.revealColor});
    case ROLE_REVEAL:
      return Object.assign({}, state, {revealColor: action.revealRole});
    default:
      return state;
  }
}

export const displayLeaderReducer = (state = false, action) => {
  switch (action.type) {
    case DISPLAY_LEADER_INFO:
      return action.leaderInfo
    default:
      return state;
  }
}

export const callForNewLeaderReducer = (state = false, action) => {
  switch (action.type) {
    case CALL_FOR_NEW_LEADER:
      return action.newLeader
    default:
      return state;
  }
}



const rootReducer = combineReducers({
  users: userReducer,
  game: gameReducer,
  revealer: revealReducer,
  leaderInfo: displayLeaderReducer,
  callForNewLeader: callForNewLeaderReducer
})

export default rootReducer
