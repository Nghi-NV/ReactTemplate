import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './ButtonStyles.scss';

class Button extends Component {
  render() {
    const {
      children,
      kind,
      noFill,
      onClick,
      className,
      disabled,
      isLoading,
      isCircular,
      spinnerClass
    } = this.props;

    let config = styles.primary;

    if(disabled) {
      config = styles.btnDisable
    } else {
      if(kind == 'secondary') {
        config = styles.secondary
      }
      if(kind == 'tertiary') {
        config = styles.tertiary
      }
      if(kind == 'danger') {
        config = styles.danger
      }
    }

    return (
      <div
        className={[
          styles.btn,
          config,
          noFill ? styles.noFill : '',
          isCircular ? styles.isCircular : '',
          className
        ].join(' ')}
        onClick={disabled ? () => {} : onClick}
      >
        {children}
        {disabled ? '' : isCircular ? '' : isLoading ? <div className={[styles.loader, spinnerClass].join(' ')}></div> : ''}
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
  noFill: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  spinnerClass: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isCircular: PropTypes.bool
}

export default Button;
