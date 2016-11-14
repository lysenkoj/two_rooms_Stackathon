// import React, { Component } from 'react';
//
//
// export default class JoinGame extends Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             usernameEntered: 'user1',
//             gameId: null,
//             isHost: false,
//             socketId: socket.id
//         };
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({usernameEntered: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.usernameEntered);
//         event.preventDefault();
//     }
//
//
//     render() {
//         return (
//             <div className='outer'>
//                 <h1> JOIN A GAME YOU FOOL </h1>
//
//                 <h3>Enter The Game ID You Would Like To Join</h3>
//
//
//
//
//                 <form id="nonHostUsernameInput" onSubmit={this.handleSubmit}>
//                     Enter a Custom UserName:
//                     <br></br>
//                     <input type="text" value={this.state.usernameEntered} onChange={this.handleChange} />
//                     <input type="submit" value="Submit" />
//                 </form>
//
//             </div>
//         );
//     }
// }
