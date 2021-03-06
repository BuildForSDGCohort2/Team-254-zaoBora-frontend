import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FaTwitter, FaFacebook, FaArrowLeft } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from "formik";
import { Image } from 'cloudinary-react';
import { connect } from 'react-redux';

import RegisterForm from '../components/RegisterForm';
import { validationSchema } from '../utils/validate';
import { registerUser } from '../actions/authentication';
import { registerVendor } from '../actions/vendorAuthentication';
import { RenderResMsg } from '../utils/Common';

const port = window.location.port;
const localEnv = (port === "8080");
const tree = localEnv && require('../assets/tree.png');

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(0),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	formTitle: {
		width: '100%'
	},
}));

const Register = ({
	registerUser,
	registerVendor,
	resMsg
}) => {
	const classes = useStyles();

	return (
		<Fragment>
			<div className="register-page">
				<NavLink
					className="auth-app-logo dsk"
					to="/"
				>
					<h1 className="register-title">
						<Image
							publicId="staticAssets/tree_u1brqs"
							crop="scale"
							alt="App logo"
							className="tree seedling login-sec-logo"
							secure="true"
						/>
					</h1>
				</NavLink>
				{resMsg.msg && <RenderResMsg type='error' msg={resMsg.msg} title="Error" />}
				<span className="mb mb-register">
					<span className="mb mb-register__wrapper">
						<NavLink
							to="/"
						>
							<FaArrowLeft style={{
								fontSize: 20,
								cursor: 'pointer',
								color: '#666'
							}} />
						</NavLink>
						<span className="mb-register-title">
							<Typography
								className={classes.formTitle}
								variant="h5"
							>
								Register
							</Typography>
						</span>
					</span>
				</span>
				<div className="register-section">
					<div className="register-section__wrapper">
						<div className="zao-bora-info-sec">
							<div className="zao-bora-info">
								<div className="zao-bora-info__wrapper">
									<h1 className="register-title">
										<Image
											publicId="staticAssets/tree_u1brqs"
											crop="scale"
											alt="App logo"
											className="tree seedling"
											secure="true"
										/>
									</h1>
									<div className="register-text">
										<p>Zao Bora is an online marketplace developed by innovators for farmers, retailers and consumers.<br /> Zao Bora strives to connect farmers with potential buyers by enabling transparent online purchase of products as well as sharing of products/produce through photosharing on the platform. Zao Bora is led by a team of hardworking and dedicated enterpreneurs who are always available for support and assistance.</p>
										<span className="social-media-links">
											<p>Check us out on social media: </p>
											<FaTwitter style={{
												fontSize: 20,
												marginLeft: 5,
												cursor: 'pointer',
												color: '#38B8FF'
											}} />
											<FaFacebook style={{
												fontSize: 20,
												marginLeft: 5,
												cursor: 'pointer',
												color: '#4867AA'
											}} />
										</span>
										<p>Or call us at: +2547xxxxxxxx</p>
									</div>
									<span className="sign-in-instead dsk"
										style={{
											width: '100%'
										}}
									>
										<p>
											Already have an account? <NavLink
												to='/login'
											>
												Sign in
											</NavLink>
										</p>
									</span>
								</div>
							</div>
						</div>
						<div className="registration-form">
							<div className="registration-form__wrapper">
								<Container component="main" maxWidth="xs">
									<CssBaseline />
									<div className={classes.paper}>
										<span className="dsk-register-title dsk">
											<Typography
												className={classes.formTitle}
												// component="h1"
												variant="h4"
											>
												Register
											</Typography>
										</span>
										<Formik
											initialValues={{
												firstName: '',
												lastName: '',
												email: '',
												phoneNumber: '',
												accountType: '',
												password: '',
												confirmPassword: '',
												username: '',
												agreement: false
											}}
											validationSchema={validationSchema}
											onSubmit={(values, { setSubmitting, resetForm }) => {
												const is_farmer = (values['accountType'] === 'farmer') || (values['accountType'] === 'both') ? true : false;
												values['phoneNumber'] = values['phoneNumber'].toString();
												registerUser({
													first_name: values['firstName'],
													last_name: values['lastName'],
													username: values['username'],
													phone_number: values['phoneNumber'],
													email: values['email'],
													city: "",
													region: "",
													address: "",
													street_address: "",
													is_farmer,
													password: values['password'],
													confirm_password: values['confirmPassword']
												})
											}}
										>
											{props => <RegisterForm {...props} />}
										</Formik>
									</div>
								</Container>
							</div>
						</div>
					</div>
				</div>
				<div className="r-footer-margin"></div>
			</div>
		</Fragment >
	);
}

const mapStateToProps = (state) => ({
	resMsg: state.resMsg
})

const mapDispatchToProps = (dispatch) => ({
	registerUser: (obj) => dispatch(registerUser(obj)),
	registerVendor: (obj) => dispatch(registerVendor(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
