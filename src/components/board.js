import React, { Component } from 'react';

export default class Board extends Component {
  constructor(args){
    super();

    this.canvas_width = args.canvas_width;
    this.canvas_height = args.canvas_height;
  }

  draw(context){
    //draw background for board
    context.fillStyle = 'black';
    context.fillRect(0, 0, this.canvas_width, this.canvas_height);

    //draw net on board
    for(var i = 0; i < this.canvas_height; i += 20){
      context.fillStyle = 'white';
      context.fillRect(((this.canvas_width / 2) - 1), i, 2, 10);
    }
  }

  render(){
    return(
      <span></span>
    );
  }
}
