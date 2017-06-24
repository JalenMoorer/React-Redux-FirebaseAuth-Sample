import { combineReducers } from 'redux';
import LoginReducer from './login_reducer';
import LogoutReducer from './logout_reducer';

const rootReducer = combineReducers({
  user: LoginReducer,
  logout: LogoutReducer
});

export default rootReducer;
