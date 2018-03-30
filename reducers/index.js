import { combineReducers } from 'redux';
import auth from './reducerAuth';
import nav from './reducerNav';

const rootReducer = combineReducers({
  auth: auth,
  nav: nav
});

export default rootReducer;