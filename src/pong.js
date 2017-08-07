import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Canvas from './canvas';

class Pong extends Component {
  constructor(){
    super();

    this.state = {
      won : false,
      score : {
        player_one : 0,
        player_two : 0,
        max_score : 3
      },
      ball : {
        x : 50,
        y : 50,
        speed : {
          x : 10,
          y : 4
        }
      },
      paddle : {
        left : 250,
        right : 250,
        height : 50,
        width : 10
      }
    }
  }

  render(){
    return(
      <Canvas/>
    );
  }
}

ReactDOM.render(
  <Pong/>,
  document.querySelector('.game')
);
