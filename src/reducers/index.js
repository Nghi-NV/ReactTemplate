import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import settingReducer from './settingReducer';

export default combineReducers({
  router: routerReducer,
  setting: settingReducer
});
