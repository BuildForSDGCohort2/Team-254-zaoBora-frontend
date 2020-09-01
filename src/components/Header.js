import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

import NavBar from './NavBar';
import tree from '../assets/tree.png';


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
						            className="cart-with-badge"
								>
									<span className="cart-badge">0</span>
									<FaShoppingCart style={{
										fontSize: 25,
										cursor: 'pointer',
										color: '#818181'
									}} />
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

/*

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

			*/