import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FcGoogle } from "react-icons/fc";
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
	MuiThemeProvider
} from '@material-ui/core/styles';
import { Form, ErrorMessage } from "formik";
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

const LoginForm = (props) => {
    const classes = useStyles();
	const {
		values: { email, password, remember },
		errors,
		touched,
		handleChange,
		isValid,
		setFieldTouched
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
							variant="outlined"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							value={email}
							autoComplete="email"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
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
							value={password}
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
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
						Login with: <FacebookIcon color="primary" style={{
							fontSize: 30,
							marginLeft: 5,
							cursor: 'pointer'
						}} /><FcGoogle style={{
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