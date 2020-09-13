import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => (
	<Fragment>
		<h1>Page not found!</h1>
		<b>
			<Link to="/">
				Go back Home
			</Link>
		</b>
	</Fragment>
);

export default NotFound;