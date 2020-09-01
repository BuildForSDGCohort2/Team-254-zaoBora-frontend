import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

// const clientId = process.env.REACT_APP_CLIENT_ID;

class GoogleButton extends Component {
  constructor(props) {
    super(props)

    this.state = {

    };


  }


  GoogleSignin(res) {
    const responseGoogle = {
      Name: res.profileObj.name,
      email: res.profileObj.email,
      token: res.googleId,
      Image: res.profileObj.imageUrl,
      ProviderId: 'Google'

    }
console.log(responseGoogle)
    // debugger;
    // axios.post('http://localhost:60200/Api/Login/SocialmediaData', responseFacebook)
    //   .then((result) => {
    //     let responseJson = result;
    //     console.log(result.data.name);
    //     alert("data");
    //     sessionStorage.setItem("userData", JSON.stringify(result));
    //     this.props.history.push('/Dashboard')
    //   });
  };


  render() {
    const responseGoogle = (response) => {
      console.log(response);
      var res = response.profileObj;
      console.log(res);
      debugger;
      this.GoogleSignin(response);
      }
    return (
      <div>
        <GoogleLogin
            clientId="248824929632-14pa3gsul00n3ko7e3v0430j83mni56p.apps.googleusercontent.com"
            buttonText='Login'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={ 'single_host_origin' }
          />
      </div>
    )
  }
}

export default GoogleButton
