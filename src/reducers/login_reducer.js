import { LOGIN_USER, GET_USER} from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case LOGIN_USER:
      return action.payload;
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}
