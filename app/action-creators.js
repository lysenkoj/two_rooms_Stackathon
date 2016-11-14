export const JOIN_GAME = "JOIN_GAME";
export const CREATE_GAME = "CREATE_GAME";
export const JOIN_LOBBY = "JOIN_LOBBY";
export const CREATE_LOBBY = "CREATE_LOBBY";
export const COLOR_REVEAL = "COLOR_REVEAL";
export const ROLE_REVEAL = "ROLE_REVEAL";
export const START_NEXT_ROUND = "START_NEXT_ROUND";
export const SELECT_ROOM = "SELECT_ROOM";
export const DISPLAY_LEADER_INFO = "DISPLAY_LEADER_INFO";
export const SELECT_LEADER = "SELECT_LEADER";
export const CALL_FOR_NEW_LEADER = "CALL_FOR_NEW_LEADER";
export const START_GAME = "START_GAME";
export const SWITCH_ROOM = "SWITCH_ROOM";
export const TIMER_TICK = "TIMER_TICK";

export const timerTick = game => {
  return {
    type: TIMER_TICK,
    game
  }
}

export const switchRoom = user => {
  return {
    type: SWITCH_ROOM,
    user
  }
}

export const joinGame = user => {
  return {
    type: JOIN_GAME,
    user
  }
}

export const createGame = game => {
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