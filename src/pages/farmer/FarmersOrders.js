import React, { Fragment } from 'react';

import FarmersDashboardMenu from '../../components/farmer/FarmersDashboardMenu';
import FarmersProfile from '../../components/farmer/FarmersProfile';
import FarmerHeader from '../../components/farmer/FarmerHeader';
import FarmersOrdersList from '../../components/farmer/FarmersOrdersList';


const FarmersOrders = () => (
	<div className="dashboard-container">
		<FarmerHeader />
		<div className="dashboard-content-container">
			<FarmersDashboardMenu />
			<div className="dashboard-content-details">
				<FarmersOrdersList />
			</div>
		</div>
	</div>
);

export default FarmersOrders;