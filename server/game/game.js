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
  prepTimer: {
    timeID: null,
    time: 20,
    start: function() {
      var timerTick = this.tick.bind(this);
      if(this.timeID === null){
        this.timeID = setInterval(function() {
          timerTick();
        }, 1000);
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
        }, 1000);
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
      }
    },
    stop: function() {
      clearInterval(this.timeID);
      this.timeID = null;
    }
  },

  engine: function() {
    Rooms.sortPlayers();
  }
}




















