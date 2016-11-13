const JOIN_GAME = "JOIN_GAME";
const CREATE_GAME = "CREATE_GAME";
const JOIN_LOBBY = "JOIN_LOBBY";
const CREATE_LOBBY = "CREATE_LOBBY";
const COLOR_REVEAL = "COLOR_REVEAL";
const ROLE_REVEAL = "ROLE_REVEAL";
const START_NEXT_ROUND = "START_NEXT_ROUND";
const SELECT_ROOM = "SELECT_ROOM";
const DISPLAY_LEADER_INFO = "DISPLAY_LEADER_INFO";
const SELECT_LEADER = "SELECT_LEADER";
const CALL_FOR_NEW_LEADER = "CALL_FOR_NEW_LEADER";
const START_GAME = "START_GAME";

export const joinGame = user => {
  return {
    type: JOIN_GAME,
    user
  }
}

export const creatGame = game => {
  return {
    type: CREATE_GAME,
    game
  }
}

export const joinLobby = user => {
  return {
    type: JOIN_LOBBY,
    user
  }
}

export const createLobby = game => {
  return {
    type: CREATE_LOBBY,
    game
  }
}

export const colorReveal = color => {
  return {
    type: COLOR_REVEAL,
    revealColor
  }
}

export const roleReveal = revealRole => {
  return {
    type: ROLE_REVEAL,
    revealRole
  }
}

export const startRound = game => {
  return {
    type: START_NEXT_ROUND,
    game
  }
}

export const selectRoom = room => {
  return {
    type: SELECT_ROOM,
    room
  }
}

export const displayLeaderInfo = leaderInfo => {
  return {
    type: DISPLAY_LEADER_INFO,
    leaderInfo
  }
}

export const selectLeader = user => {
  return {
    type: SELECT_LEADER,
    user
  }
}

export const callForNewLeader = newLeader => {
  return {
    type: CALL_FOR_NEW_LEADER,
    newLeader
  }
}

export const startGame = newGame => {
  return {
    type: START_GAME,
    newGame
  }
}



/*
store= {
  users: [{user1},{user2}],
  game: {
    round: 5,
    gameIsPlaying: false,
    roundIsPlaying: false,
    activeLobby: false

  },
  revealer: {
    revealColor: false,
    revealRole: false,
  },
  leaderInfo: false,
  callForNewLeader: false,
}





*/