import React, { Fragment } from 'react';

import FarmersDashboardMenu from '../../components/farmer/FarmersDashboardMenu';
import FarmersProfile from '../../components/farmer/FarmersProfile';
import FarmerHeader from '../../components/farmer/FarmerHeader';
import ResetPasswordForm from '../../components/ResetPasswordForm';


const FarmersResetPassword = () => (
	<div className="dashboard-container">
		<FarmerHeader />
		<div className="dashboard-content-container">
			<FarmersDashboardMenu />
			<div className="dashboard-content-details">
				<ResetPasswordForm />
			</div>
		</div>
	</div>
);

export default FarmersResetPassword;