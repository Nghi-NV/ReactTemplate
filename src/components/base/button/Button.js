import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

class Button extends Component {
  render() {
    return (
      <div
        className={styles.btn}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    )
  }
}

Button.defaultProps = {
  kind: 'primary',
  noFill: false,
  onClick: () => {},
  disabled: false,
  isLoading: false,
  isCircular: false
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  kind: PropTypes.string,
  /* kind --> primary, secondary, tertiary, danger*/
  testId: PropTypes.string,
  noFill: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isCircular: PropTypes.bool
}

export default Button;
