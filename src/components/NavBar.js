import React from 'react';
import { NavLink } from 'react-router-dom';


export default class NavBar extends React.Component {
	render() {
		return (
			<div className="main-nav-bar">
				<NavLink
					to='/'
		            activeClassName="is-active"
		            exact={true}
				>
					home
				</NavLink>
				<NavLink
					to='/about'
		            activeClassName="is-active"
		            exact={true}
				>
					about
				</NavLink>
				<NavLink
					to='/login'
		            activeClassName="is-active"
				>
					login
				</NavLink>
				<NavLink
					to='/register'
		            activeClassName="is-active"
				>
					register
				</NavLink>
			</div>
		);
	}
}