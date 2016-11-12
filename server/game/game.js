'use strict'

const { currentPlayers } = require('./players.js');

const Rooms = {
  roomA: [],
  roomB: [],
  currentPlayers: currentPlayers,
  sortPlayers: function(){
      Rooms.currentPlayers.forEach(player => {
      // console.log(player.currentRoom);
      if(player.currentRoom === "A"){
          Rooms.roomA.push(player)
      } else {
          Rooms.roomB.push(player)
      }
    })
  }
}

const gameLogic = {
  round: 5,
  countdown: null,
  roundToggle: true,
  prepToggle: true,
  // leader check will turn to true when leader hits start round
  leaderStart: false,
  prepTimer: {
    timeID: null,
    time: 20,
    start: function() {
      var timerTick = this.tick.bind(this);
      if(this.timeID === null){
        this.timeID = setInterval(function() {
          timerTick();
        }, 10);
      } else {
        this.stop();
      }
    },
    tick: function() {
      console.log(this.time);
      this.time--;
      if(this.time === 0){
        gameLogic.prepToggle = false;
        this.stop();
        gameLogic.roundTimer.start();
      }
    },
    stop: function() {
      clearInterval(this.timeID);
      this.timeID = null;
    }
  },
  roundTimer: {
    timeID: null,
    time: function(){
      gameLogic.countdown = gameLogic.round * 60
    },
    start: function() {
      gameLogic.roundTimer.time();
      var timerTick = this.tick.bind(this);
      if(this.timeID === null){
        this.timeID = setInterval(function() {
          timerTick();
        }, 10);
      } else {
        this.stop();
      }
    },
    tick: function() {
      console.log(gameLogic.countdown);
      gameLogic.countdown--;
      if(gameLogic.countdown === 0){
        gameLogic.roundToggle = false;
        this.stop();
        gameLogic.round--;
        if(gameLogic.round > 0){
          // use a socket callback if leaderStart true
          // client will click start and that will be sent to server via socket
          // run timer
          gameLogic.roundTimer.start();
        }else{
          let presidentRoom;
          let bomberRoom;
          Rooms.roomA.forEach(player => {
            if(player.role.name === "President"){
              presidentRoom = "A";
            }else{
              presidentRoom = "B";
            }
          })
          Rooms.roomA.forEach(player => {
            if(player.role.name === "Bomber"){
              bomberRoom = "A";
            }else{
              bomberRoom = "B";
            }
          })
          if(presidentRoom !== bomberRoom){
            console.log("BLUE TEAM WINS!");
          }else{
            console.log("RED TEAM WINS!");
          }
        }
      }
    },
    stop: function() {
      clearInterval(this.timeID);
      this.timeID = null;
    }
  },
  engine: function() {
    Rooms.sortPlayers();
    gameLogic.prepTimer.start();

  }
}





gameLogic.engine();














