import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import styles from './TextInputStyles.scss';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.value || ''
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
      style,
      kind,
      showPassword,
      isError
    } = this.props;

    const User = (
      <input
        className={[
          styles.textInput,
          isError ? styles.enableError : '',
          className
        ].join(' ')}
        placeholder={placeholder || 'Email'}
        ref={input => {this.txtInput = input}}
        value={this.state.text}
        onChange={this.onChangeText.bind(this)}
        style={style}
        spellCheck='false'
        maxLength={30}
      />
    )

    const Password = (
      <input
        className={[
          styles.textInput,
          showPassword ? '' : styles.security,
          isError ? styles.enableError : '',
          className
        ].join(' ')}
        placeholder={placeholder || 'Password'}
        ref={input => {this.txtInput = input}}
        value={this.state.text}
        onChange={this.onChangeText.bind(this)}
        style={style}
        spellCheck='false'
        maxLength={20}
      />
    )

    const Normal = (
      <input
        className={[
          styles.textInput,
          className
        ].join(' ')}
        placeholder={placeholder}
        ref={input => {this.txtInput = input}}
        value={this.state.text}
        onChange={this.onChangeText.bind(this)}
        style={style}
        spellCheck='false'
      />
    )

    return (
      kind == 'user' ? User : kind == 'password' ? Password : Normal
    )

  }
}

TextInput.defaultProps = {
  kind: 'normal',
  value: '',
  showPassword: false,
  isError: false,
}

TextInput.propTypes = {
  /**
    kind -->typeOf user, password and normal
  **/
  kind: PropTypes.string,


  /**
    className -->className Customes
  **/
  className: PropTypes.string,


  /**
    style -->Customes with stylesheet
  **/
  style: PropTypes.string,


  /**
    value -->text value
  **/
  value: PropTypes.string,


  /**
    onChange -->call when change text
  **/
  onChange: PropTypes.func,


  /**
    onKeyEnter -->call when Enterkey has pressed
  **/
  onKeyEnter: PropTypes.func,


  /**
    showPassword -->show or hide password when kind == password
  **/
  showPassword: PropTypes.bool,


  /**
    isError -->enable or disable errer style default red color
    kind == user or password
  **/
  isError: PropTypes.bool
}

export default TextInput;
