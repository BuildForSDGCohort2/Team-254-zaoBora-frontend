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
import FacebookIcon from '@material-ui/icons/Facebook';
import { FcGoogle } from "react-icons/fc";
import Divider from '@material-ui/core/Divider';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from "formik";

import Header from '../components/Header';
import Footer from '../components/Footer';
import tree from '../assets/tree.png';
import RegisterForm from '../components/RegisterForm';
import { validationSchema } from '../utils/validate';


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
    		<Header />
	        <div className="register-section">
	        	<div className="zao-bora-info-sec">
	        		<span className="zao-bora-info">
						<img src={tree} alt="tree seedling" />
		        		<h1>Zao Bora</h1>
						<p>
							Already have an account? <NavLink
								to='/login'
							>
								Sign in
							</NavLink>
						</p>
	        		</span>
	        	</div>
	        	<div className="registration-form">
			        <Container component="main" maxWidth="xs">
						<CssBaseline />
						<div className={classes.paper}>
							<Typography
								className={classes.formTitle}
								// component="h1"
								variant="h4"
							>
								Register
							</Typography>
							<Formik
		                        initialValues={{
		                            firstName: '',
		                            lastName: '',
		                            email: '',
		                            phoneNumber: '',
		                            accountType: '',
		                            password: '',
		                            confirmPassword: '',
		                            agreement: ''
		                        }}
		                        validationSchema={validationSchema}
		                        onSubmit={(values, { setSubmitting, resetForm }) => {
		                        	console.log(values);
		                        }}
		                        render={props => <RegisterForm {...props} />}
		                    />
	                    </div>
					</Container>
				</div>
			</div>
	    	<Footer />
    	</div>
    );
}

export default Register;