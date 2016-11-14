'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const path = require('path');
const { currentPlayers } = require('./players.js');



// Bones has a symlink from node_modules/APP to the root of the app.
// That means that we can require paths relative to the app root by
// saying require('APP/whatever').
//
// This next line requires our root index.js:
const pkg = require('APP')

const app = express()

const server = require('http').Server(app);

const io = require('socket.io')(server);

io.on('connection', function (socket) {

    socket.on('createdGameLobbyId', function(data){
        console.log("Data from start.js: ", data);
    })



  socket.on('startGame', function(){
      gameLogic.engine()
  })

  socket.on('nextRound', function(){
    if(gameLogic.round > 0){
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
  })


    socket.on('disconnect', function(){
        console.log("Jack, I'll never let go...");
    })
    console.log('A new client has connected!');
console.log(socket.id);

});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

if (!pkg.isProduction && !pkg.isTesting) {
  // Logging middleware (dev only)
  app.use(require('volleyball'))
}

module.exports = app
  // We'll store the whole session in a cookie
  .use(require('cookie-session') ({
    name: 'session',
    keys: [process.env.SESSION_SECRET || 'an insecure secret key'],
  }))

  // Body parsing middleware
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

  // Serve static files from ../public
  .use(express.static(resolve(__dirname, '..', 'public')))

  // Serve our api

  // Send index.html for anything else.
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

if (module === require.main) {
  // Start listening only if we're the main module.
  //
  // https://nodejs.org/api/modules.html#modules_accessing_the_main_module
  server.listen(
    process.env.PORT || 1337,
    () => {
      console.log(`--- Started HTTP Server for ${pkg.name} ---`)
      console.log(`Listening on ${JSON.stringify(server.address())}`)
    }
  )
}




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
