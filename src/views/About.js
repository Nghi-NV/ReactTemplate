import React, { Component } from 'react';
import BG from '../components/BG';

import './styles.scss';

class About extends Component {
  render() {
    return (
      <div style={{height: '200px', width: '200px', color: 'white'}}>
        This is About component
        <div className="content">
          Hello SCSS
        </div>
        <div style={styles.btn}>
          Button
        </div>
      </div>
    );
  }
}

const styles = {
  btn: {
    width: 350*2,
    height: 36,
    borderRadius: 8,
    backgroundColor: 'skyblue',
    marginTop: 12,
    marginLeft: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'roboto-light',
    fontSize: '1em',
    fontWeight: '100',
  }
}

export default About;
