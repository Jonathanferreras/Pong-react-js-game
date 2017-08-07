import React, { Component } from 'react';
import Canvas from './canvas';

export default class Paddle extends Component {
  constructor(args){
    super();

    this.wall = args.paddle_wall;
    this.pos = args.paddle_pos;
    this.height = args.paddle_height;
    this.width = args.paddle_width;

    }

  draw(canvas_context){
    canvas_context.fillStyle = 'white';
    canvas_context.fillRect(this.wall, this.pos, this.width, this.height);
  }

  render(){
    return(
      <span></span>
    );
  }
}
