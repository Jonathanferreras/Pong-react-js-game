import React, { Component } from 'react';

export default class Board extends Component {
  constructor(args){
    super();

    this.canvas_width = args.canvas_width;
    this.canvas_height = args.canvas_height;
  }

  draw(context){
    context.fillStyle = 'black';
    context.fillRect(0, 0, this.canvas_width, this.canvas_height);
  }

  render(){
    return(
      <span></span>
    );
  }
}
