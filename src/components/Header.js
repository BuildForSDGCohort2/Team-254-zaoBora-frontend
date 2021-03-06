import React from 'react';
import { connect } from 'react-redux';
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
import { CgProfile } from "react-icons/cg";
import { AiFillShop, AiOutlineLogout } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";
import { GoListOrdered } from "react-icons/go";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Image } from 'cloudinary-react';

import filterProducts from '../selectors/products';
import FilterProducts from './FilterProducts';
import { logoutUser } from '../actions/authentication';
import {
	setTextFilter,
	focusResults,
	blurResults
} from '../actions/filters';

const port = window.location.port;
const localEnv = (port === "8080");
const tree = localEnv && require('../assets/tree.png');

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
		fontSize: '1.5rem',
		color: '#666',
		padding: theme.spacing(1.5, 1.5, 1.5, 0),
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

export const ListMenu = (anchor, toggleDrawer, displayIcon, logout) => {
	const classes = useStyles();

	return (
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
				},
				{
					name: 'My Shop',
					url: '/farmer/profile'
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
					name: 'About Us',
					url: '/about'
				},
				{
					name: 'FAQ',
					url: '/faq'
				}].map(item => (
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
				<ListItem button>
					<div
						style={{
							width: '100%',
							textAlign: 'center'
						}}
						onClick={logout}
					>
						<NavLink
							to="/"
							className="mb-menu-links"
							exact={true}
							style={{
								color: '#FFB400'
							}}
						>
							<ListItemText primary="LOGOUT" />
						</NavLink>
					</div>
				</ListItem>
			</List>
		</div>
	);
}

export const displayIcon = (name) => {
	switch (name) {

		case 'Market':
			return (
				<AiFillShop style={{
					fontSize: '2rem'
				}} />
			);
		case 'Profile':
			return (
				<CgProfile style={{
					fontSize: '2rem'
				}} />
			);
		case 'Orders':
			return (
				<GoListOrdered style={{
					fontSize: '2rem'
				}} />
			);
		case 'My Shop':
			return (
				<AiFillShop style={{
					fontSize: '2rem'
				}} />
			);
		case 'About Us':
			return (
				<BsInfoCircleFill style={{
					fontSize: '2rem'
				}} />
			);
		case 'FAQ':
			return (
				<FaQuestionCircle style={{
					fontSize: '2rem'
				}} />
			);
		default:
			return;
	}
}

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
	const {
		setTextFilter,
		filters,
		focusResults,
		blurResults,
		authentication,
		logoutUser
	} = props;

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

	const logout = () => {
		logoutUser()
		setAnchorEl(null);
	}

	return (
		<HideOnScroll {...props}>
			<AppBar position="sticky" color="inherit">
				<div className="header-container">
					<div className="header-auth-section">
						<div className="header-auth-section-container">
							<div className="header-auth-section-wrapper">
								<div className="about-faq">
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
								</div>
								{
									!authentication?.authenticated && <div className="header-auth-btns">
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
								}
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
										<Image
											publicId="staticAssets/tree_ze9kbz"
											crop="scale"
											alt="app-logo"
											className="register-app-logo app-logo-mkt"
											secure="true"
										/>
									</NavLink>
								</div>
								<div className="search-filters-section dsk">
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
												value={filters.text}
												onChange={e => setTextFilter(e.target.value)}
												inputProps={{ 'aria-label': 'search' }}
												onFocus={() => focusResults()}
												onBlur={() => blurResults()}
											/>
										</div>
									</div>
									{
										(!!filters.text && filters.searching) && <FilterProducts />
									}
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
												{
													authentication?.user?.is_farmer && <MenuItem
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
												}
												{
													authentication?.authenticated && <MenuItem
														onClick={logout}
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
												}
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
										className="hamburger-menu"
										style={{
											fontSize: '3rem',
											color: '#666'
										}}
									/>
									<Drawer
										anchor={'right'}
										open={state['right']}
										onClose={toggleDrawer('right', false)}
									>
										{ListMenu('right', toggleDrawer, displayIcon, logout)}
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
											value={filters.text}
											onChange={e => setTextFilter(e.target.value)}
											inputProps={{ 'aria-label': 'search' }}
											onFocus={() => focusResults()}
											onBlur={() => blurResults()}
										/>
									</div>
								</div>
								<div className="filtered-content">
									{
										(!!filters.text && filters.searching) && <FilterProducts />
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</AppBar>
		</HideOnScroll>
	);
}

const mapStateToProps = ({ products, filters, authentication }) => ({
	filters,
	products: filterProducts(products, filters),
	authentication
})

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	focusResults: () => dispatch(focusResults()),
	logoutUser: () => dispatch(logoutUser()),
	blurResults: () => dispatch(blurResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
