'use-strict'

const usersFromLobby = require('../gameLobby') //this will be array
const roleArray = require('./roles.js')

export const currentPlayers = []

function CreatePlayer(id, username, role, leader, currentRoom){
    this.id = id;
    this.username = username;
    this.role = role;
    this.leader = leader;
    this.currentRoom = currentRoom;
}

let idCounter = usersFromLobby.length

usersFromLobby.forEach(user, index =>{
    let role = roleArray[index]

    let newPlayer = new CreatePlayer(index, user, role, leader, currentRoom);
    currentPlayers.push(newPlayer)
})

//lobby --> will receive array of userNames to be assigned to players
//create players initialize game function
