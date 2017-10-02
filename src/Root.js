import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import Routes from './Routes';
import history from './config/configHistory';

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes/>
    </ConnectedRouter>
  </Provider>
)

export default Root;
