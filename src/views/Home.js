import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { setLanguage } from '../actions';
import langs from '../config/langs';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: ''
    }
  }

  componentWillReceiveProps(nextProps) {

  }

  handleClick() {
    console.log('click me', this.props)
    // this.props.dispatch(push('/about'))
    const { setting } = this.props;
    if(setting.language == "en") {
      this.props.setLanguage('vn')
    } else if (setting.language == "vn") {
      this.props.setLanguage('en')
    }

  }

  render() {
    const { setting } = this.props;
    return (
      <div className="container">
        <button onClick={this.handleClick.bind(this)}>{setting.language == "en" ? "English" : "Tieng Viet"}</button>
        This is Home component
        <div>
          {langs.login}
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  console.log("mapStateToProp", state)
  return {
    router: state.router,
    setting: state.setting
  }
}

export default connect(mapStateToProp, { setLanguage })(Home);
