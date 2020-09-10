import React, { Fragment } from 'react';

import FarmersDashboardMenu from '../../components/farmer/FarmersDashboardMenu';
import FarmersProfile from '../../components/farmer/FarmersProfile';
import FarmerHeader from '../../components/farmer/FarmerHeader';
import ResetFarmersPassword from '../../components/farmer/ResetFarmersPassword';


const FarmerResetPassword = () => (
	<div className="dashboard-container">
		<FarmerHeader />
		<div className="dashboard-content-container">
			<FarmersDashboardMenu />
			<div className="dashboard-content-details">
				<ResetFarmersPassword />
			</div>
		</div>
	</div>
);

export default FarmerResetPassword;