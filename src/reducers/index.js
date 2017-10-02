import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import todoReducer from './todoReducer';

// import other reducer...

export default combineReducers({
  router: routerReducer,
  todo: todoReducer
});
