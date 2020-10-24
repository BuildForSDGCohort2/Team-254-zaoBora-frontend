import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import { Formik } from "formik";

import AccountProfileForm from '../AccountProfileForm';


const FarmersProfile = () => (
	<div className="farmer-profile-card-container">
		<h4>Profile Info</h4><br />
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
	            // validationSchema={updateAccountSchema}
	            onSubmit={(values, { setSubmitting, resetForm }) => {
	            	console.log(values)
	            }}
	        >
	        	{props => <AccountProfileForm {...props} />}
	        </Formik>
		</Card>
	</div>
);

export default FarmersProfile;