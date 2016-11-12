import React, { Component } from 'react';

export default class RevealButtons extends Component {

// randomExplore() {
//   this.state.animations = [];
//   var a = document.querySelectorAll('div.a');
//   a = Array.prototype.slice.call(a);

//   a.forEach((el, i, ra) => {
//   var to = {
//     x: Math.random() * (i % 2 === 0 ?-11 : 11),
//     y: Math.random() * 12,
//     go: Math.random(),
//     newY: Math.random() * 150
//   }

//   this.state.animations.push(el.animate([
//     { transform: 'translate(0, '+to.newY+'px)' },
//     { transform: 'translate('+to.x+'rem,'+to.y+'rem) scaleX('+to.go+') scaleY('+to.go+')' },
//     { transform: 'translate('+to.y+'rem,'+Math.random()*300+'px) scaleX(1) scaleY(1)' },
//   ], {
//     duration: (Math.random() + 1) * 2000,
//     direction: 'alternate',
//     fill: 'both',
//     iterations: Infinity,
//     easing: 'ease-in-out'
//   }))
// });
// }


  render() {
    return (
      <div className='RevealButtonsContainer'>
        <button type="button" className="RevealButton" id="btn1" >
            <img className="revealButton" src="stylesheets/button.svg" />
        </button>
        <button type="button" className="RevealButton" id="btn2" >
            <img className="revealButton" src="stylesheets/button.svg" />
        </button>
      </div>
    );
  }
}
