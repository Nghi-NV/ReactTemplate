import React, { Component } from 'react';
import TextInput from '../components/base/TextInput';
import Button from '../components/base/Button';

import { connect } from 'react-redux';
import { setTheme } from '../actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      theme: this.props.setting.theme || 'dark'
    }
  }

  onChange(e) {
    this.setState({
      text: e
    })
  }
  
  btnClick() {
    // console.log(this.state.text)
    // let { text } = this.state;

    // if(text == '') return;

    // localStorage.setItem('data', text)
    this.props.setTheme('light')
  }

  loadData() {
    // let cached = localStorage.getItem('data');

    // console.log(this.props)
    this.props.setTheme('dark')
  }

  render() {
    return (
      <div className="container" style={styles.container}>
        <TextInput
          placeholder="Input message"
          onChange={this.onChange.bind(this)}
        />
        <br/>
        <Button
          onClick={this.btnClick.bind(this)}
        >
          Light Theme
        </Button>
        <br/><br/>
        <Button
          onClick={this.loadData.bind(this)}
        >
          Dark Theme
        </Button>

        <br/>
        <span style={{color: 'white'}}>
          {this.props.setting.theme}
        </span>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

const mapStateToProps = (state) => {
  return {
    setting: state.setting
  }
}

export default connect(mapStateToProps, { setTheme })(HomePage);
