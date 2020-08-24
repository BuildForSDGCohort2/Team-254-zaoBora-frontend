import React, { Fragment } from 'react';

import NavBar from './NavBar';
import tree from '../assets/tree.png';


const Header = () => (
	<Fragment>
		<div>
			<span
				className="app-logo"
			>
				<img src={tree} alt="tree seedling" />
				<h2>Zao Bora</h2>
			</span>
			<NavBar />
		</div>
	</Fragment>
);

export default Header;