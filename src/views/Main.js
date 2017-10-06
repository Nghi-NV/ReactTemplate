import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import HomePage from './HomePage';

class Main extends Component {
  render() {
    return (
      <div style={{display: 'flex', flex: 1}}>
        <HomePage/>
      </div>
    );
  }
}

export default Main;
