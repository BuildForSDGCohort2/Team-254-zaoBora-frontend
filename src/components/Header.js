import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { withStyles, fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Badge from '@material-ui/core/Badge';
import Slide from '@material-ui/core/Slide';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";

import tree from '../assets/tree.png';


const HideOnScroll = props => {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		border: '.1rem solid #BFBFBF',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		fontSize: '1.2rem',
		color: '#666',
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	}
}));

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

const Header = (props) => {
	const classes = useStyles();

	return (
		<HideOnScroll {...props}>
			<AppBar position="sticky" color="inherit">
				<div className="header-container">
					<div className="header-auth-section">
						<div className="header-auth-section-container">
							<div className="header-auth-btns">
								<NavLink
									className="header-login-button no-background-btn header-btn"
									to="/login"
								>Sign in</NavLink>
								<p>|</p>
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
											<StyledBadge badgeContent={3} color="secondary">
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
							<div className="mb-search-filters-section mb">
								<div className="search-bar">
									<div className={classes.search}>
										<div className={classes.searchIcon}>
											<SearchIcon />
										</div>
										<InputBase
											placeholder="Search…"
											classes={{
												root: classes.inputRoot,
												input: classes.inputInput,
											}}
											inputProps={{ 'aria-label': 'search' }}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</AppBar>
		</HideOnScroll>
	);
}

export default Header;