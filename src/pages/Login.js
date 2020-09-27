import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FaArrowLeft } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from "formik";
import { Image, Transformation } from 'cloudinary-react';
import { withRouter } from "react-router";

import LoginForm from '../components/LoginForm';
import { LoginSchema } from '../utils/validate';
import { RenderResMsg } from '../utils/Common';
import { loginUser } from '../actions/authentication';

const port = window.location.port;
const localEnv = (port === "8080");
const farmer = localEnv && require('../assets/farmer-2.png');
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
    }
}));

const Login = ({
	resMsg,
	loginUser
}) => {
    const classes = useStyles();
	
	const renderImg = (port, localImgUrl, hostedUrl, className, id="") => {
		switch(port) {
			case "":
				return (
					<Image
						publicId={hostedUrl}
						crop="scale"
						alt={className}
						className={className}
						id={id}
					>
						<Transformation quality="auto" fetchFormat="auto" />
					</Image>
				);
			case "8080":
				return (
					<img
						src={localImgUrl}
						alt={className}
						className={className}
						id={id}
					/>
				)
			default:
				return;
		}
	}

    return (
    	<div className="login-page register-page">
			<NavLink
				className="auth-app-logo dsk"
				to="/"
			>
    			<h1 className="register-title">
					{renderImg(port, tree, "staticAssets/tree_u1brqs", "register-app-logo")}
	        		Zao Bora
    			</h1>
			</NavLink>
			{resMsg.msg && <RenderResMsg type={resMsg.type} msg={resMsg.msg} title="Error" />}
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
					{renderImg(port, farmer, "staticAssets/farmer-2_zyqgic", "register-app-logo", "farmer-illustration")}
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
										loginUser({
											email: values['email'],
											password: values['password']
										});
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

const mapStateToProps = (state) => ({
	resMsg: state.resMsg
})

const mapDispatchToProps = (dispatch) => ({
	loginUser: (userDetails) => dispatch(loginUser(userDetails))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));