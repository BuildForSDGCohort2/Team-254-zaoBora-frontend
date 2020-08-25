import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter, FaArrowLeft } from "react-icons/fa";
import Divider from '@material-ui/core/Divider';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from "formik";

import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';
import { validationSchema } from '../utils/validate';
import tree from '../assets/tree.png';


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
	const [state, setState] = React.useState({
		accountType: ''
	});

    return (
    	<div className="register-page">
			<NavLink
				className="auth-app-logo dsk"
				to="/"
			>
    			<h1 className="register-title">
					<img src={tree} alt="tree seedling" className="register-app-logo" />
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
							cursor: 'pointer'
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
	        	<div className="zao-bora-info-sec">
	        		<div className="zao-bora-info">
	        			<h1 className="register-title">
							<img src={tree} alt="tree seedling" className="register-app-logo" />
			        		Zao Bora
	        			</h1>
	        			<div className="register-text">
	        				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ex, suscipit vel ex in, fringilla sodales elit. Curabitur sollicitudin convallis pulvinar. Phasellus suscipit aliquet massa, vitae rhoncus leo tristique eget. Cras accumsan erat eget orci commodo gravida. Maecenas velit felis, semper vel ex ut, consequat accumsan ipsum. Nulla posuere mi sed molestie ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a viverra enim.</p><br />
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
			                        	console.log(values);
			                        }}
			                    >
			                    	{props => <RegisterForm {...props} />}
			                    </Formik>
		                    </div>
						</Container>
					</div>
				</div>
			</div>
			<div className="r-footer-margin"></div>
	    	<Footer />
    	</div>
    );
}

export default Register;