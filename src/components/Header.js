import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import NavBar from './NavBar';
import tree from '../assets/tree.png';


const Header = () => (
	<Fragment>
		<div className="header-wrapper">
			<div className="header-auth-section">
				<div className="header-btns-wrapper">
					<div className="header-auth-btns-container">
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
			<div className="header-container">
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
				<div className="header-nav-section">
					<NavBar />
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
	</Fragment>
);

export default Header;