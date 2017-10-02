import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import configStore from './config/configStore';

ReactDOM.render(
  <Root store={configStore}/>,
  document.getElementById('root')
)
