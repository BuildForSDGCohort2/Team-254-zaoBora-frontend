import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { withStyles } from '@material-ui/core/styles';
import { FiShoppingCart } from "react-icons/fi";
import Badge from '@material-ui/core/Badge';

import tree from '../assets/tree.png';


const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
		fontSize: '1.1rem',
		background: '#4caf50'
	},
}))(Badge);

const Header = () => (
	<Fragment>
		<div className="header-container">
			<div className="header-auth-section">
				<div className="header-auth-section-container">
					<div className="header-auth-btns">
						<NavLink
							className="header-login-button no-background-btn header-btn"
							to="/login"
						>Sign in</NavLink>
						<p>or</p>
						<NavLink
							className="header-register-button primary-btn header-btn"
							to="/register"
						>Register</NavLink>
					</div>
				</div>
			</div>
			<div className="header-links-section">
				<div className="header-logo-links">
					<div className="header-logo-links-container">
						<div className="header-logo-section">
							<NavLink
								to="/"
								className="app-logo"
							>
				    			<h2 className="register-title">
									<img src={tree} alt="tree seedling" className="register-app-logo" />
					        		Zao Bora
				    			</h2>
				    			<h5 className="mb-register-title">
									<img src={tree} alt="tree seedling" className="register-app-logo" />
					        		Zao Bora
				    			</h5>
							</NavLink>
						</div>
						<div className="header-nav-section">
							<div className="navigation-bar">
								<NavLink
									to='/'
						            activeClassName="is-active"
						            exact={true}
						            className="navbar-link"
								>
									Market
								</NavLink>
								<NavLink
									to='/about'
						            activeClassName="is-active"
						            className="navbar-link"
								>
									About us
								</NavLink>
								<NavLink
									to='/account'
						            activeClassName="is-active"
						            className="navbar-link"
								>
									Account
								</NavLink>
								<NavLink
									to='/cart'
						            activeClassName="is-active"
						            className=""
								>
									<StyledBadge badgeContent={1} color="secondary">
										<FaShoppingCart style={{
											fontSize: 25,
											cursor: 'pointer',
											color: '#818181'
										}} />
									</StyledBadge>
								</NavLink>
							</div>
						</div>
						<div className="mb-about">
							<NavLink
								to='/about'
					            activeClassName="is-active"
					            className="navbar-link"
							>
								About us
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Fragment>
);

export default Header;