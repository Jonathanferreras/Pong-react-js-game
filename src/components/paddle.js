import React, { Component } from 'react';

export default class Paddle extends Component {
  constructor(args){
    super();

    this.wall = args.paddle_wall;
    this.pos = args.paddle_pos;
    this.height = args.paddle_height;
    this.width = args.paddle_width;
    }

  draw(context){
    context.fillStyle = 'white';
    context.fillRect(this.wall, this.pos, this.width, this.height);
  }

  render(){
    return(
      <span></span>
    );
  }
}
