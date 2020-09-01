import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";


const useStyles = makeStyles({
	stickToBottom: {
	    width: '100%',
	    position: 'fixed',
	    bottom: 0,
	    borderTop: '.1rem solid #ddd'
	},
	bigFont: {
		fontSize: '1.1rem'
	}
});

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		fontSize: '1.1rem',
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
		background: '#4caf50'
	},
}))(Badge);

const MobileNav = () => {

	const classes = useStyles();
	const [value, setValue] = useState('recents');
	const [homeClass, setHomeClassName] = useState('##4caf50');
	const [cartClass, setCartClassName] = useState('#818181');
	const [accountClass, setAccountClassName] = useState('#818181');

	return (
		<div className="mobile-navigation">
			<BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					switch(newValue) {
						case 0:
							setHomeClassName(homeClass, '#4caf50')
							setCartClassName(cartClass, '#818181')
							setAccountClassName(accountClass, '#818181')
							break;
						case 1:
							setHomeClassName(homeClass, '#818181')
							setCartClassName(cartClass, '#4caf50')
							setAccountClassName(accountClass, '#818181')
							break;
						case 2:
							setHomeClassName(homeClass, '#818181')
							setCartClassName(cartClass, '#818181')
							setAccountClassName(accountClass, '#4caf50')
					}
		    	}}
				showLabels
				className={classes.stickToBottom}
			>
				<BottomNavigationAction label="Market" icon={
					<NavLink
						to='/'
			            activeClassName="is-mb-active"
			            style={{}}
			            exact={true}
					>
						<FiHome style={{
							fontSize: 25,
							cursor: 'pointer',
							color: {homeClass}
						}} />
					</NavLink>
				} />
				<BottomNavigationAction label="Cart" icon={
					<NavLink
						to='/cart'
			            activeClassName="is-mb-active"
					>
						<StyledBadge badgeContent={4} color="secondary">
							<FiShoppingCart style={{
								fontSize: 25,
								cursor: 'pointer',
								marginBottom: '.5rem',
								color: {cartClass}
							}} />
						</StyledBadge>
					</NavLink>
				} />
				<BottomNavigationAction label="Account" icon={
					<NavLink
						to='/account'
			            activeClassName="is-mb-active"
					>
						<FaRegUser style={{
							fontSize: 25,
							cursor: 'pointer',
							color: {accountClass}
						}} />
					</NavLink>
				} />
			</BottomNavigation>
		</div>
	)
}

export default MobileNav;