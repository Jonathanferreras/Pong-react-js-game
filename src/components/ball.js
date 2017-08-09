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

    this.ball_x_speed = this.state.speed;
    this.ball_y_speed = this.state.speed;
  }

  draw(context){
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(this.x, this.y, this.radius, this.start_angle, this.end_angle, true);
    context.fill();
  }

  move(){
    this.x += this.ball_x_speed;
    this.y += this.ball_y_speed;

    if(this.x < 0 || this.x > this.canvas_width){
      this.ball_x_speed = -this.ball_x_speed;
    }

    if(this.y < 0 || this.y > this.canvas_height){
      this.ball_y_speed = -this.ball_y_speed;
    }
  }

  render(){
    return(
      <span></span>
    );
  }
}
