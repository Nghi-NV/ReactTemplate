import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import HomePage from './HomePage';
import Nav from './Nav';

class Main extends Component {
  render() {
    return (
      <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <Nav/>
      </div>
    );
  }
}

export default Main;
