import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import styles from './TextInputStyles.scss';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }

    this.returnText = this.returnText.bind(this);
  }

  onChangeText(e) {
    let { onChange } = this.props;
    this.setState({
      text: e.target.value
    })

    if(onChange) {
      this.props.onChange(e.target.value)
    }

    this.txtInput.onkeypress = (e) => {
      var key = e.which;
      if(key == 13) {
        this.returnText();
        return false;
      }
    }
  }

  returnText() {
    let { onKeyEnter } =this.props;
    this.txtInput.blur();

    if(onKeyEnter) {
      onKeyEnter(this.state.text)
    }
  }

  render() {
    let {
      className,
      placeholder,
      value,
    } = this.props
    return (
      <input
        className={[
          styles.textInput,
          className
        ].join(' ')}
        placeholder={placeholder}
        ref={input => {this.txtInput = input}}
        value={this.state.text}
        onChange={this.onChangeText.bind(this)}
        spellCheck='false'
      />
    );
  }
}

TextInput.defaultProps = {
  value: ''
}

TextInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  /**
    onKeyEnter -->call when Enterkey has pressed
  **/
  onKeyEnter: PropTypes.func,
}

export default TextInput;
