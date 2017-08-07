import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Paddle from './paddle';

export default class Canvas extends Component {
  constructor(props){
    super(props);

    this.state = {
      canvas : {
        width : "500",
        height : "400"
      }
    }
  }

  componentDidMount(){
    this.canvas = ReactDOM.findDOMNode(this.refs.gameCanvas)
    this.canvas_context = this.canvas.getContext('2d');
    this.canvas_context.fillStyle = 'black';
    this.canvas_context.fillRect(0, 0, this.state.canvas.width, this.state.canvas.height);

    this.paddle_one = new Paddle({
      paddle_wall : 5,
      paddle_pos : 250,
      paddle_height : 50,
      paddle_width : 10
    });

    this.paddle_two = new Paddle({
      paddle_wall : (this.state.canvas.width - 15),
      paddle_pos : 250,
      paddle_height : 50,
      paddle_width : 10
    });
    this.paddle_one.draw(this.canvas_context);
    this.paddle_two.draw(this.canvas_context);
  }


  render(){
    return(
      <canvas ref="gameCanvas" width={ this.state.canvas.width } height={ this.state.canvas.height } ></canvas>
    );
  }
}
