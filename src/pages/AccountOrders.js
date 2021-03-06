import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
	fade,
	makeStyles,
	ThemeProvider,
	createMuiTheme
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { FaReceipt } from "react-icons/fa";
import { ImRedo2 } from "react-icons/im";

import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import AccountMenu from '../components/AccountMenu';
import Orders from '../components/Orders';
import filterOrders from '../selectors/orders';
import {
	setOrderTextFilter,
	sortByStatus
} from '../actions/filters';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
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

const theme = createMuiTheme({
	overrides: {
	    MuiInputLabel: {
	    	root: {
	        	"&$focused": {
	          		color: "#4dbc51"
	        	}
	    	}
	    }
	},
	palette: {
		primary: {
			main: '#4dbc51',
			contrastText: "#fff"
		},
	}
});

const AccountOrders = ({
	orders,
	setOrderTextFilter,
	sortByStatus,
	filters
}) => {
	const classes = useStyles();
	const [state, setState] = React.useState({ status: 'open' });

	const handleChange = (event) => {
		const status = event.target.value;
		setState({ status });
		sortByStatus(status);
	};
	console.log(orders);

	return (
		<div className="account-page account-orders-page">
			<Header />
			<div className="account-container orders-page-container">
				<div className="account-filter-section">
					<div className="account-filter-section-container">
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
								value={filters.orderText}
								inputProps={{ 'aria-label': 'search' }}
								onChange={e => setOrderTextFilter(e.target.value)}
							/>
						</div>
						<div className="orders-filter-section">
							<Grid className="orders-filter-grid">
								<ThemeProvider theme={theme}>
									<FormControl
										variant="outlined"
										className={`${classes.formControl} orders-filter-form-control`}
										label="Sort by"
									>
										<InputLabel htmlFor="outlined-age-native-simple">Sort by</InputLabel>
										<Select
											native
											value={state.status}
											onChange={handleChange}
											label="Sort by"
											inputProps={{
												name: 'status',
												id: 'outlined-age-native-simple',
											}}
										>
									        <option aria-label="None" value="" />
											<option value="complete">Complete</option>
											<option value="pending">Pending</option>
											<option value="declined">Declined</option>
											<option value="processing">Processing</option>
											<option value="cancelled">Cancelled</option>
										</Select>
									</FormControl>
								</ThemeProvider>
							</Grid>
						</div>
					</div>
				</div>
				<div className="account-section-info">
					<AccountMenu />
					<div className="mb mb-order-items">
						{orders.map(row => (
							<Card key={row.item} className="mb-order-item-container">
								<div className="item-content">
									<div className="item-details mb-order-item-details">
										<p>Description: {row.item}</p>
										<p>Status: {row.status}</p>
										<p>Date: {row.date}</p>
										<p>Total: {row.total}</p>
									</div>
								</div>
								<div className="mb-order-actions">
									<div className="mb-order-actions-container">
										<div className="mb-order-icons">
											<FaReceipt
												style={{
													cursor: 'pointer',
													color: '#4caf50',
													fontSize: '2rem'
												}}
											/>
											<ImRedo2
												style={{
													cursor: 'pointer',
													color: '#4caf50',
													fontSize: '2rem'
												}}
											/>
										</div>
										<div className="mb-modify-quantity">
										</div>
									</div>
								</div>
							</Card>
						))}
					</div>
					<Card className="dsk account-info-container account-orders-info-container">
						<Orders />
					</Card>
				</div>
			</div>
			<MobileNav />
		</div>
	);
}


const mapStateToProps = ({ orders, filters }) => ({
	filters,
	orders: filterOrders(orders, filters)
})

const mapDispatchToProps = dispatch => ({
	setOrderTextFilter: (text) => dispatch(setOrderTextFilter(text)),
	sortByStatus: (value) => dispatch(sortByStatus(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountOrders);