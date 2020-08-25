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
import tree from '../assets/tree.png';
import LoginForm from '../components/LoginForm';
import { validationSchema } from '../utils/validate';
import farmer from '../assets/farmer.jpg';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formTitle: {
        width: '100%'
    }
}));

const Login = () => {
    const classes = useStyles();

    return (
    	<div className="login-page register-page">
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
							cursor: 'pointer',
							color: '#666'
						}} />
					</NavLink>
					<span className="mb-register-title">
						<Typography
							className={classes.formTitle}
							variant="h5"
						>
							Login
						</Typography>
					</span>
				</span>
			</span>
	        <div className="login-section">
	        	<div className="zao-bora-illustration dsk">
	        		<div className="farmer-illustration zao-bora-info">
	        			<img src={farmer} alt="farmer with wheelbarrow" id="farmer-illustration" />
	        		</div>
	        	</div>
	        	<div className="login-form">
		        	<div className="login-form__wrapper registration-form__wrapper">
				        <Container component="main" maxWidth="xs">
							<CssBaseline />
							<div className={classes.paper}>
								<span className="dsk-register-title dsk">
									<Typography
										className={classes.formTitle}
										variant="h4"
									>
										Login
									</Typography>
								</span>
								<Formik
			                        initialValues={{
			                            email: '',
			                            password: '',
			                            remember: ''
			                        }}
			                        validationSchema={validationSchema}
			                        onSubmit={(values, { setSubmitting, resetForm }) => {
			                        	console.log(values);
			                        }}
			                    >
			                    	{props => <LoginForm {...props} />}
			                    </Formik>
		                    </div>
						</Container>
					</div>
				</div>
			</div>
			<div className="l-footer-margin"></div>
	    	<Footer />
    	</div>
    );
}

export default Login;