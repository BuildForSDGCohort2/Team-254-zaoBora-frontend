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
	const [state, setState] = React.useState({
		accountType: ''
	});
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
				<Grid item xs={12} sm={6}>
					<ThemeProvider theme={theme}>
						<TextField
							autoComplete="fname"
							name="firstName"
							value={firstName}
							variant="outlined"
							required
							fullWidth
							id="firstName"
							label="First Name"
							InputProps={{ className: classes.root }}
							onChange={handleChange}
							autoFocus
                            helperText={
                                touched.firstName && errors.firstName ? errors.firstName : 'Enter your full name.'
                            }
						/>
                        <ErrorMessage
                            component="div"
                            name="firstName"
                            className="invalid-feedback"
                        />
					</ThemeProvider>
				</Grid>
				<Grid item xs={12} sm={6}>
					<ThemeProvider theme={theme}>
						<TextField
							variant="outlined"
							required
							fullWidth
							id="lastName"
							label="Last Name"
							name="lastName"
							value={lastName}
							autoComplete="lname"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
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
							label="Phone Number"
							name="phoneNumber"
							type="number"
							value={phoneNumber}
							autoComplete="phone-number"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
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
						<FormControl
							variant="outlined"
							className={classes.formControl}
							fullWidth
							required
							label="Account Type"
							id="account-type"
							autoComplete="account-type"
							name="accountType"
							value={accountType}
							onChange={handleChange}
						>
							<InputLabel htmlFor="outlined-age-native-simple">Account Type</InputLabel>
					        <Select
								native
								label="Account Type"
								inputProps={{
									name: 'account-type',
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
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
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
							label="Confirm Password"
							type="password"
							id="confirm-password"
							autoComplete="confirm-password"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={
							<Checkbox
								value={agreement}
								color="default"
								name="agreement"
								onChange={handleChange}
							/>
						}
						label="I agree to terms of use."
					/>
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
						Register with: <FacebookIcon color="primary" style={{
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
		</Form>
	);
}

export default RegisterForm;