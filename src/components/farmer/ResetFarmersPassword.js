import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import { Formik } from "formik";

import ResetPasswordForm from '../ResetPasswordForm';
import { ResetPassSchema } from '../../utils/validate';


const ResetFarmersPassword = () => (
	<div className="farmer-profile-card-container">
		<h4>Reset Password</h4><br />
		<Card className="farmer-profile-card">
			<Formik
	            initialValues={{
	                firstName: '',
	                lastName: '',
	                address: '',
	                username: '',
	                phoneNumber: '',
	                region: '',
	                city: '',
	                info: ''
	            }}
	            validationSchema={ResetPassSchema}
	            onSubmit={(values, { setSubmitting, resetForm }) => {
	            	console.log(values)
	            }}
	        >
	        	{props => <ResetPasswordForm {...props} />}
	        </Formik>
		</Card>
	</div>
);

export default ResetFarmersPassword;