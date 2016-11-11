'use strict'

const { currentPlayers } = require('./players.js');

//creates room storage arrays and sorts (maybe unneccesary?)
let roomA = []
let roomB = []

currentPlayers.forEach(player => {
    // console.log(player.currentRoom);
    if(player.currentRoom === "A"){
        roomA.push(player)
    } else {
        roomB.push(player)
    }
})



function windowCountDown(seconds){
    console.log("HEY");
    let count = seconds

    let tick = function(){
        count--;
        console.log("count from round timer", count);
        if(count === 0){
            this.roundToggle = false
            clearInterval(timer);
        }
    }

    setInterval(tick, 1000);
}

windowCountDown(5)

// timer for in round (called with diff round times)
gameEngine.prototype.countdownRoundTimer = windowCountDown


// gameEngine.prototype.countdownRoundTimer = (seconds) => {
//     let count = seconds
//
//     var timer = setInterval(() => {
//         count--;
//         console.log("count from round timer", count);
//         if(count === 0){
//             this.roundToggle = false
//             clearInterval(timer);
//         }
//     }, 1000);
// }



// timer for prep (always called with 20 secs)
// gameEngine.prototype.countdownPrepTimer = function(seconds){
//     console.log("this inside: ", this);
//
//     let count = seconds
//     var that = this;
//
//     var timer = setInterval(function() {
//         count--;
//         console.log("countr from prep timer", count);
//         if(count === 0){
//             that.prepToggle = false
//             clearInterval(timer);
//         }
//     }, 1000);
// }

// countdownPrepTimer(20)





gameEngine.prototype.nextRound = function(){
    console.log("GOT INSIDE PTOTOTYPE NEXT ROUND");
    this.round--;
}

// var testGame = new gameEngine()


const Game = {
    engine(){
        this.round = 5;
        this.roundTime = this.round * 60
        this.roundToggle = true;
        this.prepToggle = true;

        while(this.round > 0){
            if(this.prepToggle){
                this.countdownRoundTimer(20)
            }
            // if(this.round > 0 && this.prepToggle === false){
            //     this.countdownRoundTimer(this.roundTime)
            //     if(!this.roundToggle){
            //         this.nextRound()
            //     }
            // }
            // console.log("THIS.ROUND from gameEngine: ", this.round);
        }
    },

}




























//fdsa
