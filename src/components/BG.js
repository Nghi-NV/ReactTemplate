import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class BG extends Component {
  render(){
    let { theme } = this.props;
    return (
      <div style={theme == 'dark' ? styles.container : styles.lightTheme}>
        {this.props.children}
      </div>
    )
  }
}

BG.propTypes = {
  children: PropTypes.any
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    background: 'black', /* For browsers that do not support gradients */
    background: '-webkit-radial-gradient(circle, #033958, black 66%, black)', /* Safari */
    background: '-o-radial-gradient(circle, #033958, black 66%, black)', /* Opera 11.6 to 12.0 */
    background: '-moz-radial-gradient(circle, #033958, black 66%, black)', /* Firefox 3.6 to 15 */
    background: 'radial-gradient(circle, #033958, black 66%, black)', /* Standard syntax */
  },
  lightTheme: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    backgroundColor: 'green'
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.setting.theme
  }
}

export default connect(mapStateToProps)(BG);
function newFunction() {
    return this;
}

