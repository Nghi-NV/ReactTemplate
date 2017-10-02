import React from 'react';
import { Route } from 'react-router';

import Home from './components/Home';
import HomePage from './components/HomePage';
import About from './components/About';

const Routes = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/homepage" component={HomePage}/>
  </div>
)

export default Routes;
