import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from 'react-icons/fa'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

import {
	makeStyles,
	createMuiTheme,
	ThemeProvider
} from '@material-ui/core/styles';
import { Form } from "formik";


const FacebookSignin = (res) => {
    const responseFacebook = {
      Name: res.name,
      email: res.email,
      token: res.accessToken,
      Image: res.picture.data.url,
      ProviderId: 'Facebook'

    }
console.log(responseFacebook)

    /* To use the below code snippet when integrating API */

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

const responseFacebook = (response) => {
	  console.log(response);
	  var res = response.profileObj;
	  console.log(res);
	  debugger;
	  // this.FacebookSignin(response);
	}

const GoogleSignin = (res) => {
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
	//     sessionStorage.setItem("userData", JSON.stringify(rsult));
	//     this.props.history.push('/Dashboard')
	//   });
};

const responseGoogle = (response) => {
	console.log(response);
	var res = response.profileObj;
	console.log(res);
	debugger;
	// this.GoogleSignin(response);
	}

const useStyles = makeStyles((theme) => ({
    root: {
    	"&.Mui-focused": {
	        "& .MuiOutlinedInput-notchedOutline": {
	        	borderColor: "#4dbc51",
	        	borderWidth: "1px"
	        }
    	}
    },
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1)
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    formTitle: {
        width: '100%'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.success.main,
        padding: theme.spacing(1.5)
    },
}));

const theme = createMuiTheme({
	overrides: {
	    MuiInputLabel: {
	    	root: {
	        	"&$focused": {
	          		color: "#4dbc51"
	        	}
	    	}
	    }
	},
	palette: {
		primary: {
			main: '#4dbc51',
			contrastText: "#fff"
		},
	}
});

const RegisterForm = (props) => {
    const classes = useStyles();
	const {
		values: {
			firstName,
			lastName,
			phoneNumber,
			accountType,
			email,
			password,
			confirmPassword,
			agreement
		},
		errors,
		handleChange,
	} = props;

	return (
		<Form
			className={classes.form}
			noValidate
		>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<ThemeProvider theme={theme}>
						<TextField
							autoFocus
							autoComplete="fname"
							name="firstName"
							value={firstName}
							variant="outlined"
							fullWidth
							id="firstName"
							label={errors.firstName ? 'Error' : 'First Name'}
							InputProps={{ className: classes.root }}
							onChange={handleChange}
							helperText={errors.firstName ? errors.firstName : ''}
							error={errors.firstName ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12} sm={6}>
					<ThemeProvider theme={theme}>
						<TextField
							variant="outlined"
							fullWidth
							id="lastName"
							label={errors.lastName ? 'Error' : 'Last Name'}
							name="lastName"
							value={lastName}
							autoComplete="lname"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.lastName ? errors.lastName : ''}
							error={errors.lastName ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12} sm={6}>
					<ThemeProvider theme={theme}>
						<TextField
							variant="outlined"
							required
							fullWidth
							id="phone-number"
							label={errors.phoneNumber ? 'Error' : 'Phone Number(+254..)'}
							name="phoneNumber"
							type="number"
							value={phoneNumber}
							autoComplete="phone-number"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.phoneNumber ? errors.phoneNumber : ''}
							error={errors.phoneNumber ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12} sm={6}>
					<ThemeProvider theme={theme}>
						<TextField
							variant="outlined"
							required
							fullWidth
							id="email"
							name="email"
							value={email}
							autoComplete="email"
							onChange={handleChange}
							label={errors.email ? 'Error' : 'Email Address'}
							InputProps={{ className: classes.root }}
							helperText={errors.email ? errors.email : ''}
							error={errors.email ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12}>
					<ThemeProvider theme={theme}>
						<FormControl
							variant="outlined"
							className={classes.formControl}
							fullWidth
							required
							id="account-type"
							autoComplete="account-type"
							name="accountType"
							value={accountType}
							onChange={handleChange}
							label={errors.accountType ? 'Error' : 'Farmer(seller)/Buyer?'}
							error={errors.accountType ? true : false}
						>
							<InputLabel htmlFor="outlined-age-native-simple">Farmer(seller)/Buyer?</InputLabel>
					        <Select
								native
								label={errors.accountType ? 'Error' : 'Farmer(seller)/Buyer?'}
								inputProps={{
									name: 'accountType',
									id: 'outlined-account-type-native-simple',
								}}
					        >
								<option aria-label="None" value={accountType} />
								<option value="consumer">Consumer</option>
								<option value="farmer">Farmer</option>
								<option value="both">Both</option>
					        </Select>
						</FormControl>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12} sm={6}>
					<ThemeProvider theme={theme}>
						<TextField
							variant="outlined"
							required
							fullWidth
							name="password"
							value={password}
							label={errors.password ? 'Error' : 'Password'}
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.password ? errors.password : ''}
							error={errors.password ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12} sm={6}>
					<ThemeProvider theme={theme}>
						<TextField
							variant="outlined"
							required
							fullWidth
							name="confirmPassword"
							value={confirmPassword}
							label={errors.confirmPassword ? 'Error' : 'Confirm Password'}
							type="password"
							id="confirm-password"
							autoComplete="confirm-password"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.confirmPassword ? errors.confirmPassword : ''}
							error={errors.confirmPassword ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12}>
					<FormControl
						required
						error={errors.agreement ? true : false}
						component="fieldset"
						className={classes.formControl}
					>
						<FormControlLabel
							label="I agree to terms of use."
							control={
								<Checkbox
									value={agreement}
									color="default"
									name="agreement"
									onChange={handleChange}
								/>
							}
						/>
						<FormHelperText>{errors.agreement && errors.agreement}</FormHelperText>
					</FormControl>
				</Grid>
			</Grid>
			<ThemeProvider theme={theme}>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
				>
					Register
				</Button>
			</ThemeProvider><br />
			<div className="hr-divider">
				<span className="hr-divider-line"></span><span className="divider-span">OR</span>
			</div><br />
			<Grid container justify="flex-start">
				<Grid item>
					<span className="social-media-icons" style={{ fontSize: 15 }}>
						Continue with:
						<FacebookLogin
							appId="354726742586574"
							autoLoad
							callback={responseFacebook}
							fields="name,email"
							render={renderProps => (
								<FaFacebook onClick={renderProps.onClick} style={{
									fontSize: 30,
									marginLeft: 5,
									cursor: 'pointer',
									color: '#4867AA'
								}} />
							)}
						/>
						<GoogleLogin
		        			clientId="248824929632-14pa3gsul00n3ko7e3v0430j83mni56p.apps.googleusercontent.com"
							render={renderProps => (
					      		<FcGoogle onClick={renderProps.onClick} style={{
									fontSize: 30,
									marginLeft: 5,
									cursor: 'pointer',
									color: '#4867AA'
								}} />
					    	)}
				            onSuccess={responseGoogle}
				            onFailure={responseGoogle}
				            cookiePolicy={ 'single_host_origin' }
				        />
					</span>
				</Grid>
			</Grid><br />
			<span className="sign-in-instead mb">
				<p>
					Already have an account? <NavLink
						to='/login'
					>
						Sign in
					</NavLink>
				</p>
			</span>
		</Form>
	);
}

export default RegisterForm;
