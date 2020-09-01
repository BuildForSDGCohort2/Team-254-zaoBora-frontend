import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";


export default class NavBar extends React.Component {
	render() {
		return (
			<div className="main-nav-bar">
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
		);
	}
}