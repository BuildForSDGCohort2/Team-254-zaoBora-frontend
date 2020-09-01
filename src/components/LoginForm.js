import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

import FacebookButton from '../buttons/facebook/FacebookButton'

import { FcGoogle } from "react-icons/fc";
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from '@material-ui/core/styles';
import { Form } from "formik";
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
    	"&.Mui-focused": {
	        "& .MuiOutlinedInput-notchedOutline": {
	        	borderColor: "#4dbc51",
	        	borderWidth: "1px"
	        }
    	}
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.success.main,
        padding: theme.spacing(1.5)
    }
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

const LoginForm = (props) => {
    const classes = useStyles();
	const {
		values: { email, password, remember },
		errors,
		handleChange,
	} = props;

	return (
		<Form
			className={classes.form}
			noValidate
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<ThemeProvider theme={theme}>
						<TextField
							required
							variant="outlined"
							name="email"
							autoComplete="email"
							fullWidth
							id={errors.email ? 'outlined-error-helper-text' : 'email'}
							label={errors.email ? 'Error' : 'Email Address'}
							value={email}
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.email ? errors.email : ''}
							error={errors.email ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12}>
					<ThemeProvider theme={theme}>
						<TextField
							variant="outlined"
							required
							fullWidth
							name="password"
							type="password"
							value={password}
							label={errors.password ? 'Error' : 'Password'}
							id={errors.password ? 'outlined-error-helper-text' : 'password'}
							autoComplete="current-password"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.password ? errors.password : ''}
							error={errors.password ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<div className="extra-options">
					<div className="remember-me s-font-size">
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
										value={remember}
										color="default"
										name="remember"
										onChange={handleChange}
									/>
								}
								label="Remember me."
							/>
						</Grid>
					</div>
        			<span className="forgot-password">
						<NavLink
							to='/login'
							className="s-font-size"
						>
							Forgot Password?
						</NavLink>
        			</span>
				</div>
			</Grid>
			<ThemeProvider theme={theme}>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={`s-font-size ${classes.submit}`}
				>
					Login
				</Button>
			</ThemeProvider><br />
			<div className="hr-divider">
				<span className="hr-divider-line"></span><span className="divider-span">OR</span>
			</div><br />
			<Grid container justify="flex-start">
				<Grid item>
					<span className="social-media-icons s-font-size">
						 <FacebookButton /><FcGoogle style={{
							fontSize: 30,
							marginLeft: 5,
							cursor: 'pointer'
						}} />
					</span>
				</Grid>
			</Grid>
			<p className="register-instead s-font-size">
				Don't have an account? <NavLink
					to='/register'
				>
					Register here
				</NavLink>
			</p>
		</Form>
	);
}

export default LoginForm;
