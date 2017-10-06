import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import styles from './CheckboxStyles.scss';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onCheck: this.props.isCheck || false,
      check: this.props.value || 'off'
    }
  }

  handleClick() {
    this.setState({
      onCheck: !this.state.onCheck,
      check: this.state.onCheck ? 'on' : 'off'
    })

    let { onClick } = this.props;

    if(onClick) {
      this.props.onClick(!this.state.onCheck)
    }
    
  }

  render() {
    let {
      className,
      value,
      noFill,
      style
    } = this.props;

    const Check = (
      <img src={require('./imgs/Check/check.png')}/>
    )

    return (
      <div
        className={[
          styles.checkBox,
          noFill ? styles.isNoFill : '',
          className
        ].join(' ')}
        style={style}
        onClick={this.handleClick.bind(this)}
      >
        {
          this.state.onCheck ? Check : ''
        }
      </div>
    );
  }
}

Checkbox.defaultProps = {
  value: 'off',
  isCheck: false,
  noFill: false,
}

Checkbox.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  value: PropTypes.oneOf(['on', 'off']),
  isCheck: PropTypes.bool,
  noFill: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Checkbox;
