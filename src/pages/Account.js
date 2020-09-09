import React, { Fragment } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Formik } from "formik";

import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import AccountMenu from '../components/AccountMenu';
import AccountProfileForm from '../components/AccountProfileForm';
import { updateAccountSchema } from '../utils/validate';


const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		border: '.1rem solid #BFBFBF',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		fontSize: '1.5rem',
		color: '#666',
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	}
}));

const Account = () => {
	const classes = useStyles();

	return (
		<div className="account-page">
			<Header />
			<div className="account-container">
				<div className="account-search-bar">
					<div className={`${classes.search} search-bar-item`}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
				</div>
				<div className="account-section-info">
					<b className="mb acc-title">Account Details</b>
					<AccountMenu />
					<Card className="account-info-container">
						<Formik
	                        initialValues={{
	                            firstName: '',
	                            lastName: '',
	                            address: '',
	                            phoneNumber: '',
	                            region: '',
	                            city: '',
	                            info: ''
	                        }}
	                        validationSchema={updateAccountSchema}
	                        onSubmit={(values, { setSubmitting, resetForm }) => {
	                        	console.log(values)
	                        }}
	                    >
	                    	{props => <AccountProfileForm {...props} />}
	                    </Formik>
					</Card>
				</div>
			</div>
			<MobileNav />
		</div>
	);
}

export default Account;