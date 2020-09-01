import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

// const clientId = process.env.REACT_APP_CLIENT_ID;

class GoogleButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
    }
    console.log(response)
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
      <div>
        <GoogleLogin
            clientId="248824929632-14pa3gsul00n3ko7e3v0430j83mni56p.apps.googleusercontent.com"
            buttonText='Login'
            onSuccess={ this.login }
            onFailure={ this.handleLoginFailure }
            cookiePolicy={ 'single_host_origin' }
            responseType='code,token'
          />
      </div>
    )
  }
}

export default GoogleButton
