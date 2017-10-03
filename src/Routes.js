import React from 'react';
import { Route } from 'react-router';

import BG from './components/BG';
import Main from './views/Main';
import Home from './views/Home';
import HomePage from './views/HomePage';
import About from './views/About';

const Routes = () => (
  <BG>
    <Route exact path="/" component={Main}/>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/homepage" component={HomePage}/>
  </BG>
)

export default Routes;
