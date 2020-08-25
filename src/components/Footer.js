import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


const Copyright = (props) => (
    <Typography variant="h5" align="center">
		<span style={{color:'#868686'}}>
			{'Copyright © '}
			<Link color="primary" href="https://material-ui.com/">
				Zao Bora
			</Link>{' '}
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