import React, { Component } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { getInitial } from './actions'; 

import BG from './components/BG';
import Main from './views/Main';
import Home from './views/Home';
import HomePage from './views/HomePage';
import About from './views/About';

class Routes extends Component {
  componentWillMount() {
    this.props.getInitial()
  }

  render() {
    return (
      <BG>
        <Route exact path="/" component={Main}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/homepage" component={HomePage}/>
      </BG>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, { getInitial })(Routes);
