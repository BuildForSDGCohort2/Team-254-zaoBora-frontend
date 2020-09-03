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

import FacebookButton from '../buttons/facebook/FacebookButton'

import {
	makeStyles,
	createMuiTheme,
	ThemeProvider
} from '@material-ui/core/styles';
import { Form } from "formik";


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
						Continue with: <FacebookButton /><FcGoogle style={{
							fontSize: 30,
							marginLeft: 5,
							cursor: 'pointer'
						}} />
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