import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Home extends Component {
  handleClick() {
    console.log('click me', this)
    this.props.dispatch(push('/about'))
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.handleClick.bind(this)}>Click me</button>
        This is Home component
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  console.log("mapStateToProp", state)
  return {
    router: state.router
  }
}

export default connect(mapStateToProp)(Home);
