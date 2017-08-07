import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Canvas extends Component {
  constructor(){
    super();

    this.state = {
      canvas : {
        width : "400",
        height : "300"
      }
    }
  }

  componentDidMount(){
    let canvas = ReactDOM.findDOMNode(this.refs.gameCanvas)
    let canvas_context = canvas.getContext('2d');
    canvas_context.fillStyle = 'black';
    canvas_context.fillRect(0, 0, this.state.canvas.width, this.state.canvas.height);
  }

  render(){
    return(
      <canvas ref="gameCanvas" width={ this.state.canvas.width } height={ this.state.canvas.height } ></canvas>
    );
  }
}
