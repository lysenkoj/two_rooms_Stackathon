import React, { Component } from 'react';
import {Link} from "react-router";
import QuestionMarks from './QuestionMarks';

export default class RevealButtons extends Component {
  constructor(){
    super()
    this.state = {
      animations: []
    }

    this.revealColor = this.revealColor.bind(this)
    this.roleReveal = this.roleReveal.bind(this)
    this.endReveal = this.endReveal.bind(this)
    this.ColorRevealMarks = this.ColorRevealMarks.bind(this)
    this.cancelAnimation = this.cancelAnimation.bind(this)

  }

  revealColor(){
    this.state.colorReveal = true;
    this.ColorRevealMarks()
  }

  roleReveal(){
    this.state.roleReveal = true;
  }

  endReveal(){
    this.state.revealColor = false;
    this.state.revealRole = false;
    this.cancelAnimation()
  }

  cancelAnimation() {
    document.getElementsByClassName("qContainer")[0].style.visibility = "hidden";
  this.state.animations.forEach(animation => {
    animation.cancel();
  })
}

ColorRevealMarks() {
  document.getElementsByClassName("qContainer")[0].style.visibility = "visible";
  this.state.animations = [];
  var q = document.querySelectorAll('div.q');
  q = Array.prototype.slice.call(q);

  q.forEach((el, i, ra) => {
  var to = {
    x: (Math.random() * -250) + (Math.random() * 250),
    y: (Math.random() * -300) - 1000,
    go: Math.random()* 5,
    newY: Math.random() * 150
  }

  this.state.animations.push(el.animate([
    { transform: 'translate(-250px, 10px)' },
    { transform: 'translate('+to.x+'px,'+to.y+'px) scaleX('+to.go+') scaleY('+to.go+')' }
  ], {
    duration: (Math.random() + 1) * 1000,
    fill: 'both',
    iterations: Infinity,
  }))
});
}



  render() {
    return (
      <div className='RevealButtonsContainer'>
      <Link to="/RedTeam">
        <button onMouseDown={this.revealColor} onMouseUp={this.endReveal}type="button" className="RevealButton" id="btn1" >
            <img className="revealButton" src="stylesheets/button.svg" />
        </button>
      </Link>
      <Link to="/RoleRevealRed">
        <button onMouseDown={this.roleReveal} onMouseUp={this.endReveal} type="button" className="RevealButton" id="btn2" >
            <img className="revealButton" src="stylesheets/button.svg" />
        </button>
      </Link>

          <QuestionMarks/>

      </div>
    );
  }
}
