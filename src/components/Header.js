import React, { Fragment } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { withStyles, fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Badge from '@material-ui/core/Badge';
import Slide from '@material-ui/core/Slide';
import { FaShoppingCart, FaQuestionCircle, FaUserCog } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO, CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillShop, AiOutlineLogout } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";
import { GoListOrdered } from "react-icons/go";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
	},
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
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
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const displayIcon = (name) => {
		switch(name) {
			case 'Market':
				return (
					<AiFillShop style={{
						fontSize: '2rem'
					}}/>
				);
			case 'Profile':
				return (
					<CgProfile style={{
						fontSize: '2rem'
					}}/>
				);
			case 'Orders':
				return (
					<GoListOrdered style={{
						fontSize: '2rem'
					}}/>
				);
			case 'About Us':
				return (
					<BsInfoCircleFill style={{
						fontSize: '2rem'
					}}/>
				);
			case 'FAQ':
				return (
					<FaQuestionCircle style={{
						fontSize: '2rem'
					}}/>
				);
		}
	}

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{[{
					name: 'Market',
					url: '/'
				},
				{
					name: 'Profile',
					url: '/profile'
				},
				{
					name: 'Orders',
					url: '/orders'
				}].map((item, index) => (
					<ListItem button key={item.name}>
						<NavLink
							to={item.url}
							className="mb-menu-links"
							activeClassName="mb-link-active"
							exact={true}
						>
								<ListItemIcon>{displayIcon(item.name)}</ListItemIcon>
								<ListItemText primary={item.name} />
						</NavLink>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{[{
					name:'About Us',
					url: '/about'
				},
				{
					name: 'FAQ',
					url: '/faq'
				}].map((item, index) => (
					<ListItem button key={item.name}>
						<NavLink
							to={item.url}
							className="mb-menu-links"
							activeClassName="mb-link-active"
							exact={true}
						>
							<ListItemIcon>{displayIcon(item.name)}</ListItemIcon>
							<ListItemText primary={item.name} />
						</NavLink>
					</ListItem>
				))}
			</List>
		</div>
	);

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
											to='/faq'
								            activeClassName="is-active"
								            className="navbar-link"
										>
											FAQ
										</NavLink>
										<span
											aria-controls="simple-menu"
											aria-haspopup="true"
											className="menu-btn"
											onClick={handleClick}
										>
											<p className="navbar-link">Account</p>
											<RiArrowDropDownLine
												style={{
													fontSize: '2rem',
													color: '#818181',
													marginLeft: '.5rem'
												}}
											/>
										</span>
										<div className="menu-item-nav-links">
											<Menu
												id="simple-menu"
												anchorEl={anchorEl}
												keepMounted
												open={Boolean(anchorEl)}
												onClose={handleClose}
											>
												<MenuItem onClick={handleClose}>
													<span className="menu-item-group">
														<FaUserCog
															style={{
																fontSize: '1.5rem',
																color: '#818181',
																marginRight: '.8rem'
															}}
														/>
														<NavLink
															to='/profile'
												            activeClassName="is-active"
												            exact={true}
												            className="navbar-link option-link"
														>
															Profile
														</NavLink>
													</span>
												</MenuItem>
												<MenuItem
													onClick={handleClose}
												>
													<span className="menu-item-group">
														<GoListOrdered
															style={{
																fontSize: '1.5rem',
																color: '#818181',
																marginRight: '.8rem'
															}}
														/>
														<NavLink
															to='/orders'
												            exact={true}
												            activeClassName="is-active"
												            className="navbar-link option-link"
														>
															Orders
														</NavLink>
													</span>
												</MenuItem>
												<MenuItem
													onClick={handleClose}
												>
													<span className="menu-item-group">
														<AiFillShop
															style={{
																fontSize: '1.5rem',
																color: '#818181',
																marginRight: '.8rem'
															}}
														/>
														<NavLink
															to='/farmer/profile'
												            exact={true}
												            activeClassName="is-active"
												            className="navbar-link option-link"
														>
															My Shop
														</NavLink>
													</span>
												</MenuItem>
												<MenuItem
													onClick={handleClose}
												>
													<span className="menu-item-group">
														<AiOutlineLogout
															style={{
																fontSize: '1.5rem',
																color: '#818181',
																marginRight: '.8rem'
															}}
														/>
														<NavLink
															to='/'
												            exact={true}
												            activeClassName="is-active"
												            className="navbar-link option-link"
														>
															Logout
														</NavLink>
													</span>
												</MenuItem>
											</Menu>
										</div>
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
								<div className="mb mobile-hamburger-menu">
									<GiHamburgerMenu
										onClick={toggleDrawer('right', true)}
										style={{
											fontSize: '2rem',
											color: '#666'
										}}
									/>
							        <Drawer
							        	anchor={'right'}
							        	open={state['right']}
							        	onClose={toggleDrawer('right', false)}
						        	>
							            {list('right')}
							        </Drawer>
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