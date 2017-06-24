import firebase from '../firebase';

// action types
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const GET_USER = 'GET_USER';


//action creators
export function githubLogin() {

  const provider =  new firebase.auth.GithubAuthProvider();

  const request = firebase.auth().signInWithPopup(provider);

  return (dispatch) => {
    request.then( (result) => {
      const data = {
        email: result.user.email,
        apiKey: result.user.j
      }
       localStorage.setItem('login', 'True');
        dispatch({ type: LOGIN_USER, payload: data})
    });
  };
}

export function githubLogout() {

  const request = firebase.auth().signOut();

    return (dispatch) => {
      request.then( () => {
        localStorage.removeItem('login');
        dispatch({ type: LOGOUT_USER, payload: ''})
      });
    };
}

export function getUser() {

  let data = false;
  const key = localStorage.key(0);
  const result = JSON.parse(localStorage.getItem(key));

  if (result) {
    data = { email: result.email,apiKey: result.apiKey };
  }

  return { type: GET_USER, payload: data };

}
