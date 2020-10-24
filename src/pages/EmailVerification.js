import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { GoMailRead } from "react-icons/go";
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider
} from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import { GrClose } from "react-icons/gr";
import { Formik } from "formik";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Form } from "formik";
import { verifyEmailValidationSchema } from '../utils/validate';


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

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
		boxShadow: theme.shadows[5],
		borderRadius: '.3rem',
		outline: 'none',
		width: '40vw',
	},
	paper2: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
		boxShadow: theme.shadows[5],
		borderRadius: '.3rem',
		outline: 'none',
	},
}));

const EmailVerification = ({
	authentication
}) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<div className="email-verification-container">
				<Card className="email-verification-card">
					<GoMailRead className="sent-email-icon" /><br />
					<Typography variant="h3" component="h3" className="email-verification-title">Email Verification</Typography>
					<p className="verification-text-info">We have sent an email to <span className="email-highlight">{authentication?.email}</span> to confirm the validity of your email address. Please check your email and follow the link to activate your account.</p>
					<p className="verification-text-info"><span className="email-highlight">{authentication?.email}</span> not your email? <span
						className="change-email"
						onClick={handleOpen}
					>Change</span></p>
				</Card>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={open}>
						<div className={`email-modal ${classes.paper}`}>
							<div className="new-post-title-container">
								<h4 className="new-post-title">Email</h4>
								<GrClose className="close-btn" onClick={handleClose} />
							</div><br />
							<Formik
								initialValues={{
									email: ''
								}}
								validationSchema={verifyEmailValidationSchema}
								onSubmit={(values, { setSubmitting, resetForm }) => {
									console.log(values)
									handleClose()
								}}
							>
								{
									({
										values: { email },
										errors,
										handleChange
									}) => <Form
										className={classes.form}
										noValidate
									>
										<Grid container spacing={2}>
											<Grid item xs={12}>
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
														label={errors.email ? 'Error' : 'Email Address'}
														InputProps={{ className: classes.root }}
														helperText={errors.email ? errors.email : ''}
														error={errors.email ? true : false}
														autoFocus
													/>
												</ThemeProvider>
											</Grid>
										</Grid><br />
										<Grid item xs={12}>
											<ThemeProvider theme={theme}>
												<Button
													type="submit"
													fullWidth
													variant="contained"
													color="primary"
													className={classes.submit}
												>
													Send
												</Button>
											</ThemeProvider>
										</Grid>
									</Form>
								}
							</Formik>
						</div>
					</Fade>
				</Modal>
			</div>
		</Fragment>
	);
}


const mapStateToProps = (state) => ({
	authentication: state.authentication
})

export default connect(mapStateToProps)(EmailVerification);