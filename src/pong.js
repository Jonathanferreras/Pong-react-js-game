import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
import Ball from './ball';
import Paddle from './paddle';

class Pong extends Component {
  constructor(){
    super();

    this.state = {
      canvas : {
        width : "500",
        height : "400"
      }
    }
  }

  componentDidMount(){
    let context = this.refs.gameCanvas.getContext('2d');
    this.context = context;
  }

  startGame(){
    const context = this.context;

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
      paddle_width : 10
    });

    this.paddle_two = new Paddle({
      paddle_wall : (this.state.canvas.width - 15),
      paddle_pos : 150,
      paddle_height : 50,
      paddle_width : 10
    });

    this.animate();
  }

  update(){
    this.board.draw(this.context);
    this.ball.draw(this.context);
    this.paddle_one.draw(this.context);
    this.paddle_two.draw(this.context);
  }

  animate(){
    setInterval(function(){
      this.update();
      this.ball.move();
    }.bind(this), 1000/30);
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
