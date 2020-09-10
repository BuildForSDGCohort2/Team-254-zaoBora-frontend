import React, { Fragment } from 'react';

import FarmersDashboardMenu from '../../components/farmer/FarmersDashboardMenu';
import FarmersProfile from '../../components/farmer/FarmersProfile';
import FarmerHeader from '../../components/farmer/FarmerHeader';
import FarmerPostList from '../../components/farmer/FarmerPostList';


const FarmersPosts = () => (
	<div className="dashboard-container">
		<FarmerHeader />
		<div className="dashboard-content-container">
			<FarmersDashboardMenu />
			<div className="dashboard-content-details">
				<FarmerPostList />
			</div>
		</div>
	</div>
);

export default FarmersPosts;