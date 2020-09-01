import React from 'react';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FaArrowLeft } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from "formik";

import tree from '../assets/tree.png';
import LoginForm from '../components/LoginForm';
import { LoginSchema } from '../utils/validate';
import farmer from '../assets/farmer-2.png';


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
			                        validationSchema={LoginSchema}
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
    	</div>
    );
}

export default Login;