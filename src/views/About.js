import React, { Component } from 'react';
import { connect } from 'react-redux';
import BG from '../components/BG';
import { push } from 'react-router-redux';

import Button from '../components/base/Button';
import TextInput from '../components/base/TextInput';

import styles from './styles.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  handleClick() {
    // console.log('click me',this.props)
    // this.props.dispatch(push('/homepage'))
    this.setState({
      isLoading: !this.state.isLoading
    })
  }

  handleChange(e) {
    console.log(e)
  }

  onKeyEnter(e) {
    console.log(e)
  }

  render() {
    return (
      <div className={styles.container}>
        <Button
          onClick={this.handleClick.bind(this)}
          className="hello"
          isLoading={this.state.isLoading}
          kind="danger"
        >
          Login
        </Button>
        <br/>
        <TextInput
          placeholder='Username'
          onChange={this.handleChange.bind(this)}
          onKeyEnter={this.onKeyEnter.bind(this)}
        /><br/>
        <TextInput
          placeholder='Password'
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect()(About);
