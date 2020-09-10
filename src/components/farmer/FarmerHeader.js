import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { CgProfile } from "react-icons/cg";
import { AiFillShop, AiOutlineLogout } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { GoListOrdered } from "react-icons/go";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { FaUserCog } from 'react-icons/fa';
import { BsCardList } from 'react-icons/bs';

import tree from '../../assets/tree.png';


const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

const FarmerHeader = () => {
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

	const displayIcon = (name) => {
		switch(name) {
			case 'Profile':
				return (
					<FaUserCog style={{
						fontSize: '2rem'
					}}/>
				);
			case 'Posts':
				return (
					<BsCardList style={{
						fontSize: '2rem'
					}}/>
				);
			case 'Orders':
				return (
					<GoListOrdered style={{
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
					name: 'Profile',
					url: '/farmer/profile'
				},
				{
					name: 'Posts',
					url: '/farmer/posts'
				},
				{
					name: 'Orders',
					url: '/farmer/orders'
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
					name:'Address',
					url: '/farmer/address'
				},
				{
					name: 'Reset Password',
					url: '/farmer/reset-password'
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
		<div className="dashboard-navbar-container">
			<NavLink to="/" className="dashboard-logo">
				<div className="dashboard-navbar">
					<img src={tree} alt="tree seedling" className="farmer-dashboard-app-logo" />
					<h4 className="mb-farmer-dashboard-title">Zao Bora</h4>
				</div>
			</NavLink>
			<GiHamburgerMenu
				onClick={toggleDrawer('right', true)}
				style={{
					fontSize: '2rem',
					color: '#666'
				}}
				className="mb"
			/>
	        <Drawer
	        	anchor={'right'}
	        	open={state['right']}
	        	onClose={toggleDrawer('right', false)}
        	>
	            {list('right')}
	        </Drawer>
		</div>
	);
}

export default FarmerHeader;