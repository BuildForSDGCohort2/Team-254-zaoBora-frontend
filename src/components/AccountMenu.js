import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { MdKeyboardArrowRight } from "react-icons/md";


const AccountMenu = () => {
	return (
		<Card className="account-menu">
			<div className="menu-link-container">
				<div className="menu-link">
					<NavLink
						to="/profile"
						className="menu-link-btn"
						activeClassName="menu-link-active"
					>
						<p className="menu-link-text">My Profile</p>
						<MdKeyboardArrowRight className="arrow-right" />
					</NavLink>
				</div>
				<div className="menu-link">
					<NavLink
						to="/orders"
						className="menu-link-btn"
						activeClassName="menu-link-active"
					>
						<p className="menu-link-text">My Orders</p>
						<MdKeyboardArrowRight className="arrow-right" />
					</NavLink>
				</div>
			</div>
		</Card>
	);
}


export default AccountMenu;