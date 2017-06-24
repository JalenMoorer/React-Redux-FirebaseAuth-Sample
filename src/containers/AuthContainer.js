import React, {Component} from 'react'
import { connect } from 'react-redux';
import { githubLogin, githubLogout, getUser  } from '../actions/index'
import { bindActionCreators } from 'redux';
import Login from '../components/Login';
import Chat from '../components/Chat';

class AuthContainer extends Component {
  constructor(props) {
    super(props)
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);

  }

  componentDidMount() {
    this.props.getUser()
  }

  onLogin(event) {
    event.preventDefault();
    this.props.githubLogin();
  }

  onLogout(event) {
    event.preventDefault();
    this.props.githubLogout();
  }

  render() {
    if (localStorage.getItem("login") !== null )
      return <Chat user={this.props.user} onLogout={this.onLogout} />
    else
      return <Login onLogin={this.onLogin} />
  }
}

function mapStateToProps( { user, logout}) {
  return { user, logout }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({githubLogin, githubLogout, getUser}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
