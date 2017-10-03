import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';
import history from './configHistory';

const middleware = routerMiddleware(history)

const configStore = createStore(
  reducers,
  applyMiddleware(middleware, thunk)
);

export default configStore;
