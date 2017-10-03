import React, { Component } from 'react';
import BG from '../components/BG';

import Button from '../components/base/button/Button';

import styles from './styles.scss';

class About extends Component {
  handleClick() {
    console.log('click me')
  }

  render() {
    return (
      <div className={styles.container}>
        <Button
          onClick={this.handleClick.bind(this)}
        >
          Login
        </Button>
      </div>
    );
  }
}

export default About;
