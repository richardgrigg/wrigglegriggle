import React from 'react'

import './styles/css/login.css';

const data = require('./images/wip.jpg');

class Login extends React.Component {

  render() {
    return (
      <div class="center">
      {/*
        <form>
          <div class="account-login-text-control">
            <input type="text" id="username" />
          </div>
          <div class="account-login-text-control">
            <input type="password" id="password" />
            <input type="submit" id="submit" value="Sign in" />
          </div>
        </form>
      */}
      <img src="{data}" />
      </div>

    )
  }
}

export default Login
