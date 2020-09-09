import React, { Fragment } from 'react';

import FarmersDashboardMenu from '../../components/farmer/FarmersDashboardMenu';
import FarmersProfile from '../../components/farmer/FarmersProfile';
import FarmerHeader from '../../components/farmer/FarmerHeader';


const FarmersDashboard = () => (
	<div className="dashboard-container">
		<FarmerHeader />
		<div className="dashboard-content-container">
			<FarmersDashboardMenu />
			<div className="dashboard-content-details">
				<FarmersProfile />
			</div>
		</div>
	</div>
);

export default FarmersDashboard;