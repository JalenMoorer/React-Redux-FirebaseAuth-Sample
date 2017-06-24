import React from 'react'
import Info from './Info';

import logo from '../assets/images/github/GitHub-Mark-120px-plus.png';

const Login = (props) => {

  return (
    <div className="container">
      <div style={{
        paddingTop: "9em"
      }}>
        <div className="row">
          <div className="col-md-6 col-xs-6 col-md-offset-3 col-xs-offset-3">
            <img src={logo} className="img-responsive center-block" alt="logo"/>
            <div className="center-block">
              <h1 className="text-center">
                Welcome to Github Hangouts</h1>
              <h6 className="text-center">Log in using your Github credentials</h6>
            </div>
            <div>
              <form onSubmit={props.onLogin} className="form-horizontal well well-lg" style={{
                margin: "40px 0"
              }}>
                <p className="text-center">Click on the button below to log in using your Github credentials</p>
                <div className="form-group">
                  <button type="submit" className="btn btn-success btn-block">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        <Info />
    </div>
  );
}

export default Login;
