import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { green } from '@material-ui/core/colors';
import {
	makeStyles,
	createMuiTheme,
	withStyles,
	ThemeProvider
} from '@material-ui/core/styles';
import { Form } from "formik";
import { Formik } from "formik";
import Card from '@material-ui/core/Card';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Image } from 'cloudinary-react';

import { updateAccountSchema } from '../utils/validate';


const port = window.location.port;
const localEnv = (port === "8080");
const mpesa = localEnv && require('../assets/mpesa.png');
const royparcel = localEnv && require('../assets/royparcel.png');
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
        backgroundColor: theme.palette.success.main,
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

const GreenRadio = withStyles({
	root: {
		color: green[400],
		'&$checked': {
			color: green[600],
		},
},
checked: {},
})((props) => <Radio color="default" {...props} />);

export const CheckoutForm = () => {
	const classes = useStyles();

	const renderImg = (port, localImgUrl, hostedUrl, className) => {
		switch(port) {
			case "":
				return (
					<Image
						publicId={hostedUrl}
						crop="scale"
						alt={className}
						className={className}
					/>
				);
			case "8080":
				return (
					<img
						src={localImgUrl}
						alt={className}
						className={className}
					/>
				)
			default:
				return;
		}
	}

	return (
		<Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                address: '',
                region: '',
                info: '',
                modeOfPayment: '',
                shippingMethod: '',
                city: ''
            }}
            validationSchema={updateAccountSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
            	console.log(values)
            }}
        >

        	{({ values: {
				firstName,
				lastName,
				phoneNumber,
				email,
				address,
				region,
				info,
				city,
                modeOfPayment,
                shippingMethod
			}, errors, handleChange }) => (
				<Form
					className={classes.form}
					noValidate
				>
					<Card className="shipping-address-form-card">
						<h4 className="shipping-address-title">Shipping Address</h4><br />
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
										id="email"
										name="email"
										value={email}
										autoComplete="email"
										onChange={handleChange}
										label={errors.email ? 'Error' : 'email'}
										InputProps={{ className: classes.root }}
										helperText={errors.email ? errors.email : ''}
										error={errors.email ? true : false}
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
						</Grid>
					</Card>
					<div className="mode-of-payment">
						<Card className="mode-of-payment-card">
							<h4 className="shipping-address-title">Mode of Payment</h4><br />
							<div className="payment-logo-btn">
								<div className="checkout-option-btn-container">
									<FormControl
										required
										error={errors.modeOfPayment ? true : false}
										component="fieldset"
										className={classes.formControl}
									>
										<FormControlLabel
											control={
												<GreenRadio
													value={modeOfPayment}
													color="default"
													name="modeOfPayment"
													onChange={handleChange}
													className="checkout-radio-btn"
												/>
											}
										/>
										<FormHelperText>{errors.agreement && errors.agreement}</FormHelperText>
									</FormControl>
									{renderImg(port, mpesa, "staticAssets/mpesa_mk6trd", "lipa-na-mpesa")}
								</div>
							</div>
						</Card>
					</div>
					<div className="shipping-method">
						<Card className="shipping-method-card">
							<h4 className="shipping-address-title">Shipping Method</h4><br />
							<div className="shipping-method-btn">
								<div className="checkout-option-btn-container">
									<FormControl
										required
										error={errors.shippingMethod ? true : false}
										component="fieldset"
										className={classes.formControl}
									>
										<FormControlLabel
											control={
												<GreenRadio
													// checked={selectedValue === 'mpesa'}
													value={shippingMethod}
													color="default"
													name="mpesa"
													onChange={handleChange}
													className="checkout-radio-btn"
												/>
											}
										/>
										<FormHelperText>{errors.agreement && errors.agreement}</FormHelperText>
									</FormControl>
									{renderImg(port, royparcel, "staticAssets/royparcel_hmuczg", "royparcel-logo")}
								</div>
							</div>
						</Card>
					</div>
					<div className="mb checkout-total-cost">
						<div className="checkout-subtotal-total">
							<p className="checkout-total-title">Subtotal</p>
							<h3 className="checkout-total-price">KES 9,000</h3>
						</div>
						<div className="checkout-shipping-total">
							<p className="checkout-total-title">Shipping</p>
							<h3 className="checkout-total-price">-</h3>
						</div>
						<div className="checkout-cumulative-total">
							<p className="checkout-total-title">Total</p>
							<h3 className="checkout-total-price">KES 9,000</h3>
						</div><br />
					</div>
					<div className="checkout-options">
						<ThemeProvider theme={theme}>
							<NavLink
								to="/cart"
								className="checkout-option-btns back-to-cart"
							>
								<Button
									color="primary"
									className="checkout-link-btn"
									startIcon={<ArrowBackIosIcon />}
								>
									Back to cart
								</Button>
							</NavLink>
							<NavLink
								to="/profile/orders"
								className="checkout-option-btns confirm-purchase"
							>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={`${classes.submit} checkout-link-btn`}
								>
									Confirm purchase
								</Button>
							</NavLink>
						</ThemeProvider><br />
					</div>
				</Form>
    		)}
        </Formik>
	)
}