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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
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

const AccountProfileForm = (props) => {
	const classes = useStyles();

	const {
		values: {
			firstName,
			lastName,
			phoneNumber,
			username,
			address,
			region,
			info,
			city
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
							id="username"
							name="username"
							value={username}
							autoComplete="username"
							onChange={handleChange}
							label={errors.username ? 'Error' : 'username'}
							InputProps={{ className: classes.root }}
							helperText={errors.username ? errors.username : ''}
							error={errors.username ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12}>
					<ThemeProvider theme={theme}>
						<TextField
							variant="outlined"
							required
							fullWidth
							id="address"
							name="address"
							value={address}
							autoComplete="address"
							onChange={handleChange}
							label={errors.address ? 'Error' : 'Address (location/sub-location)'}
							InputProps={{ className: classes.root }}
							helperText={errors.address ? errors.address : ''}
							error={errors.address ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12}>
					<ThemeProvider theme={theme}>
						<TextField
							id="additional-info"
							label={errors.info ? 'Error' : 'Additional info (Building/Street)'}
							variant="outlined"
							name="info"
							value={info}
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.info ? errors.info : ''}
							error={errors.info ? true : false}
							rows={4}
							fullWidth
							multiline
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12} sm={6}>
					<ThemeProvider theme={theme}>
						<FormControl
							variant="outlined"
							className={classes.formControl}
							fullWidth
							required
							id="region"
							autoComplete="region"
							name="region"
							value={region}
							onChange={handleChange}
							label={errors.region ? 'Error' : 'Region'}
							error={errors.region ? true : false}
						>
							<InputLabel htmlFor="region">Region</InputLabel>
					        <Select
								native
								label={errors.region ? 'Error' : 'Region'}
								inputProps={{
									name: 'region',
									id: 'region',
								}}
					        >
								<option aria-label="None" value={region} />
								<option value="consumer">Region One</option>
								<option value="farmer">Region Two</option>
								<option value="both">Region Three</option>
					        </Select>
						</FormControl>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12} sm={6}>
					<ThemeProvider theme={theme}>
						<FormControl
							variant="outlined"
							className={classes.formControl}
							fullWidth
							required
							id="city"
							autoComplete="city"
							name="city"
							value={city}
							onChange={handleChange}
							label={errors.city ? 'Error' : 'City'}
							error={errors.city ? true : false}
						>
							<InputLabel htmlFor="city">City</InputLabel>
					        <Select
								native
								label={errors.city ? 'Error' : 'City'}
								inputProps={{
									name: 'city',
									id: 'city',
								}}
					        >
								<option aria-label="None" value={city} />
								<option value="consumer">City One</option>
								<option value="farmer">City Two</option>
								<option value="both">City Three</option>
					        </Select>
						</FormControl>
					</ThemeProvider>
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
					Save
				</Button>
			</ThemeProvider><br />
		</Form>
	);
}


export default AccountProfileForm;