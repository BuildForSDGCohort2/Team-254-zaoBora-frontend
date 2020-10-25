import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const Copyright = (props) => (
    <Typography variant="h5" align="center">
		<span style={{color:'#868686'}}>
			{'Copyright © '}
			Zao Bora{' '}
			{new Date().getFullYear()}
			{'.'}
		</span>
	</Typography>
);

const Footer = () => (
	<footer>
	    <Container component="main" maxWidth="xs">
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	</footer>
);

export default Footer;