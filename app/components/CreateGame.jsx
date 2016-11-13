import React, { Component } from 'react';


export default class CreateGame extends Component {
    constructor(props) {
        super(props)


        this.state = {
            usernameEntered: 'defaultHost1',
            gameId: null,
            isHost: true,
            socketId: socket.id
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.generateGameId = this.generateGameId.bind(this);
        this.emitSocket = this.emitSocket.bind(this);
    }

    generateGameId() {
        var randomFourNums = []
        for (var i = 0; i < 4; i++) {
            randomFourNums.push(Math.floor(Math.random() * 10))
        }
        console.log("randomFourNums: ", randomFourNums.join(""));
        // return randomFourNums.join("");
        this.setState({gameId: randomFourNums.join("")});
    }

    handleChange(event) {
        this.setState({usernameEntered: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.usernameEntered6:45);
        event.preventDefault();
    }

    emitSocket(){
        if(this.state.gameId === null){
            alert("Please Create New Game ID")
        } else {
            let playerData = this.state
            // console.log("PLAayer data to send ", playerData)
            socket.emit('hostGameStart', playerData);
        }
    }

    render() {
        return (
            <div className='outer'>
                <h1> Lobby Number: # </h1>
                <div>
                    <button id="createGameIdBtn" onClick={this.generateGameId}> Create New Game ID </button>
                    {(this.state.gameId === null) ? <h4>Click Button to Generate Game ID</h4> :
                    <h4>Your Game ID is: {this.state.gameId}</h4>
                    }
                </div>


                <form id="hostUsernameInput" onSubmit={this.handleSubmit}>
                    Enter a Custom UserName:
                    <br></br>
                    <input type="text" value={this.state.usernameEntered} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>

                <div>
                    <button onClick={this.emitSocket} id="startGameBtn"> START GAME </button>
                </div>

            </div>
        );
    }
}
