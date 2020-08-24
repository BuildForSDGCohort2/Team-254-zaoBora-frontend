import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


const Copyright = () => (
    <Typography variant="h5" color="textSecondary" align="center">
		{'Copyright © '}
		<Link color="inherit" href="https://material-ui.com/">
			Zao Bora
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	</Typography>
);

const Footer = () => (
    <Container component="main" maxWidth="xs">
		<Box mt={5}>
			<Copyright />
		</Box>
	</Container>
);

export default Footer;