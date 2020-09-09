import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCog } from 'react-icons/fa';
import { BsCardList } from 'react-icons/bs';
import { AiFillShop } from 'react-icons/ai';
import { GoListOrdered } from 'react-icons/go';


const FarmersDashboardMenu = () => {
	return (
		<div className="dsk dashboard-content-menu">
			<NavLink
				to="/"
				className="farmer-link-item"
				activeClassName="farmer-link-item-active"
				exact={true}
			>
				<div className="content-menu-item farmers-market">
					<div className="content-menu-item-container">
						<AiFillShop className="content-link-icon" />
						Market
					</div>
				</div>
			</NavLink>
			<NavLink
				to="/farmer/profile"
				className="farmer-link-item"
				activeClassName="farmer-link-item-active"
				exact={true}
			>
				<div className="content-menu-item">
					<div className="content-menu-item-container">
						<FaUserCog className="content-link-icon" />
						Profile
					</div>
				</div>
			</NavLink>
			<NavLink
				to="/farmer/posts"
				className="farmer-link-item"
				activeClassName="farmer-link-item-active"
				exact={true}
			>
				<div className="content-menu-item">
					<div className="content-menu-item-container">
						<BsCardList className="content-link-icon" />
						Posts
					</div>
				</div>
			</NavLink>
			<NavLink
				to="/farmer/orders"
				className="farmer-link-item"
				activeClassName="farmer-link-item-active"
				exact={true}
			>
				<div className="content-menu-item">
					<div className="content-menu-item-container">
						<GoListOrdered className="content-link-icon" />
						Orders
					</div>
				</div>
			</NavLink>
			<NavLink
				to="/farmer/address"
				className="farmer-link-item"
				activeClassName="farmer-link-item-active"
				exact={true}
			>
				<div className="content-menu-item update-farmer">
					<div className="content-menu-item-container">
						Address
					</div>
				</div>
			</NavLink>
			<NavLink
				to="/farmer/reset-password"
				className="farmer-link-item"
				activeClassName="farmer-link-item-active"
				exact={true}
			>
				<div className="content-menu-item">
					<div className="content-menu-item-container">
						Reset Password
					</div>
				</div>
			</NavLink>
			<NavLink
				to="/"
				className="content-menu-item farmer-logout"
			>
				<div className="content-menu-item-container farmer-logout-container">
					Logout
				</div>
			</NavLink>
		</div>
	);
}

export default FarmersDashboardMenu;