import React, { Component } from 'react';

export default class Ball extends Component {
  constructor(args){
    super();

    this.x = args.ball_x;
    this.y = args.ball_y;
    this.radius = args.ball_radius;
    this.start_angle = args.ball_start_angle;
    this.end_angle = args.ball_end_angle;
    this.canvas_width = args.canvas_width;
    this.canvas_height = args.canvas_height;

    this.state = { speed : 5 }

    this.x_speed = this.state.speed;
    this.y_speed = this.state.speed;
  }

  draw(context){
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(this.x, this.y, this.radius, this.start_angle, this.end_angle, true);
    context.fill();
  }

  move(){
    this.x += this.x_speed;
    this.y += this.y_speed;

    if(this.y < 0 || this.y > this.canvas_height){
      this.y_speed = -this.y_speed;
    }
  }

  reset(){
    this.x_speed = -this.x_speed;
    this.x = this.canvas_width / 2;
    this.y = this.canvas_height / 2;
  }

  render(){
    return(
      <span></span>
    );
  }
}
