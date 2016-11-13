const usersFromLobby = [ "Jordan", "Matt", "Kenneth", "Jackson", "Franklyn", "Katy" ]


// const server = require('http').Server(app);
//
// const io = require('socket.io')(server);
//
// io.on('connection', function (socket) {
//     socket.on('hostGameStart', function(data){
//         console.log("gon into the player.js file")
//         data;
//     })
//
// });



const { fullRolesArray, testingRolesArray } = require('./roles.js')

const currentPlayers = []

var swappedArray = testingRolesArray;
var theLength = swappedArray.length - 1;
var toSwap; // The index we will swap  (i.e. the random number)
var temp; // A temporary variable to hold reference to index variable i points to
for (i = theLength; i > 0; i--) {
   toSwap = Math.floor(Math.random() * i);
   temp = swappedArray[i];
   swappedArray[i] = swappedArray[toSwap];
   swappedArray[toSwap] = temp;
}


function CreatePlayer(id, username, role, currentRoom){
    this.id = id;
    this.username = username;
    this.role = role;
    this.leader = false;
    this.currentRoom = currentRoom;
}

let idCounter = usersFromLobby.length

usersFromLobby.forEach((user, index) =>{
    let role = swappedArray[index]

    let currentRoom = (index % 2 === 0) ? "A" : "B";

    let newPlayer = new CreatePlayer(index, user, role, currentRoom);
    currentPlayers.push(newPlayer)
})

//lobby --> will receive array of userNames to be assigned to players
//create players initialize game function

module.exports = {
    currentPlayers: currentPlayers
}
