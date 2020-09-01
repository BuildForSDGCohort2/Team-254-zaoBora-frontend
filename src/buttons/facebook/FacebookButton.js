import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';


class FacebookButton extends Component {
  constructor(props) {
    super(props)

    this.state = {

    };

  }


  FacebookSignin(res) {
    const responseFacebook = {
      Name: res.name,
      email: res.email,
      token: res.accessToken,
      Image: res.picture.data.url,
      ProviderId: 'Facebook'

    }
console.log(responseFacebook)
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
    const responseFacebook = (response) => {
        console.log(response);
        var res = response.profileObj;
        console.log(res);
        debugger;
        this.FacebookSignin(response);
      }


    return (
      <div>
        <FacebookLogin
           appId="354726742586574"
           autoLoad={false}
           fields="name,email,picture"
           callback={responseFacebook}
           icon="fa-facebook"
        />
      </div>
    )
  }
}

export default FacebookButton
