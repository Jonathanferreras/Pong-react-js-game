import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';
import Ball from './components/ball';
import Paddle from './components/paddle';

class Pong extends Component {
  constructor(){
    super();

    this.state = {
      canvas : {
        width : "500",
        height : "400"
      },
      score: {
        player1 : 0,
        player2 : 0,
        max : 3
      },
      player_won : false
    }
  }

  componentDidMount(){
    let context = ReactDOM.findDOMNode(this.refs.gameCanvas).getContext('2d');
    this.context = context;
  }

  startGame(){
    this.board = new Board({
      canvas_width : this.state.canvas.width,
      canvas_height : this.state.canvas.height
    });

    this.ball = new Ball({
      ball_x : 50,
      ball_y : 50,
      ball_radius : 10,
      ball_start_angle : 0,
      ball_end_angle : Math.PI * 2,

      canvas_width : this.state.canvas.width,
      canvas_height : this.state.canvas.height
    });

    this.paddle_one = new Paddle({
      paddle_wall : 5,
      paddle_pos : 150,
      paddle_height : 50,
      paddle_width : 10,
    });

    this.paddle_two = new Paddle({
      paddle_wall : (this.state.canvas.width - 15),
      paddle_pos : 150,
      paddle_height : 50,
      paddle_width : 10,
    });

    this.update();
  }

  update(){
    const frames_per_second = 30;

    setInterval(function(){
      this.elements();
      this.movement();
    }.bind(this), 1000 / frames_per_second);

    this.playerCtrl();
  }

  elements(){
    this.board.draw(this.context);
    this.ball.draw(this.context);
    this.paddle_one.draw(this.context);
    this.paddle_two.draw(this.context);
  }

  movement(){
    this.ball.move();
    this.computerAI();

    if(this.ball.x < 0){
      if(this.ball.y > this.paddle_one.pos && this.ball.y < this.paddle_one.pos + this.paddle_one.height){
        this.ball.x_speed = -this.ball.x_speed;

        var delta_y = this.ball.y - (this.paddle_one.pos + (this.paddle_one.height / 2));
        this.ball.y_speed = delta_y * 0.25;
      } else{
        this.ball.reset();
      }
    }

    if(this.ball.x > this.state.canvas.width){
      if(this.ball.y > this.paddle_two.pos && this.ball.y < this.paddle_two.pos + this.paddle_two.height){
        this.ball.x_speed = -this.ball.x_speed;

        var delta_y = this.ball.y - (this.paddle_two.pos + (this.paddle_two.height / 2));
        this.ball.y_speed = delta_y * 0.25;
      } else{
        this.ball.reset();
      }
    }
  }

  playerCtrl(){
    document.addEventListener('mousemove', (function(event){
      if(event.clientY < this.state.canvas.height){
      this.paddle_one.pos = event.clientY - (this.paddle_one.height / 2);
      }
    }).bind(this));
  }

  computerAI(){
    var center = this.paddle_two.pos + (this.paddle_two.height / 2);
    if(center < this.ball.y + 15){
      this.paddle_two.pos += 5;
    } else if(center > this.ball.y - 15){
      this.paddle_two.pos -= 5;
    }
  }

  render(){
    return(
      <canvas ref="gameCanvas" width={ this.state.canvas.width } height={ this.state.canvas.height }>
        { this.startGame() }
      </canvas>
    );
  }
}

ReactDOM.render(
  <Pong/>,
  document.querySelector('.game')
);
