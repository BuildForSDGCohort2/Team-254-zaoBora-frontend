import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FaTwitter, FaFacebook, FaArrowLeft } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from "formik";
import { Image } from 'cloudinary-react';

import RegisterForm from '../components/RegisterForm';
import { validationSchema } from '../utils/validate';

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

const Register = () => {
	const classes = useStyles();
	
	const renderImg = (port, localImgUrl, hostedUrl, className, id="") => {
		switch(port) {
			case "":
				return (
					<Image
						key={hostedUrl}
						publicId={hostedUrl}
						crop="scale"
						alt={className}
						className={className}
					/>
				);
			case "8080":
				return (
					<img
						key={localImgUrl}
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
		<Fragment>
			<div className="register-page">
				<NavLink
					className="auth-app-logo dsk"
					to="/"
				>
					<h1 className="register-title">
						{renderImg(port, tree, "staticAssets/tree_u1brqs", "tree seedling")}
						Zao Bora
					</h1>
				</NavLink>
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
										{renderImg(port, tree, "staticAssets/tree_u1brqs", "tree seedling")}
										Zao Bora
									</h1>
									<div className="register-text">
										<br /><p>Zao Bora is an online marketplace developed by innovators for farmers, retailers and consumers.<br /> Zao Bora strives to connect farmers with potential buyers by enabling transparent online purchase of products as well as sharing of products/produce through photosharing on the platform. Zao Bora is led by a team of hardworking and dedicated enterpreneurs who are always available for support and assistance.</p><br />
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
											}} /><br />
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
												agreement: false
											}}
											validationSchema={validationSchema}
											onSubmit={(values, { setSubmitting, resetForm }) => {
												values['phoneNumber'] = values['phoneNumber'].toString();
												window.location.replace('/#/profile');
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

export default Register;