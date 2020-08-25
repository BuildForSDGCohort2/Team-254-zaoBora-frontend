import React, { Fragment } from 'react';

import NavBar from './NavBar';
import tree from '../assets/tree.png';


const Header = () => (
	<Fragment>
		<div>
			<span
				className="app-logo"
			>
    			<h1 className="register-title">
					<img src={tree} alt="tree seedling" className="register-app-logo" />
	        		Zao Bora
    			</h1>
			</span>
			<NavBar />
		</div>
	</Fragment>
);

export default Header;