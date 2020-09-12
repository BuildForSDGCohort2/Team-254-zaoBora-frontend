import React, { Fragment } from 'react';
import {
	makeStyles,
	ThemeProvider,
	createMuiTheme
} from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { FaReceipt } from "react-icons/fa";
import { ImRedo2 } from "react-icons/im";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Card from '@material-ui/core/Card';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { GrClose } from "react-icons/gr";

import beans from '../../assets/beans.jpg';
import tomatoes from '../../assets/tomatoes.jpg';


const useStyles = makeStyles((theme) => ({
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
		boxShadow: theme.shadows[5],
		borderRadius: '.3rem',
		outline: 'none',
	},
	tableHeader: {
		fontSize: '1.5rem'
	},
	tableBody: {
		fontSize: '1.2rem'
	},
	color: {
		color: '#666'
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

const FarmersOrdersList = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const createData = (id, status, date, customer, phoneNumber, total) => {
		return { id, status, phoneNumber, date, total, customer };
	}

	const rows = [
		createData('#abc123', 'pending', '01-01-2020', '@JohnDoe', '0711234543', 1500),
		createData('#def456', 'complete', '01-01-2020', '@JaneDoe', '0745678333', 5000),
	];

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="farmer-orders-container">
			<h4 className="dsk">Orders</h4><br />
			<Card className="farmer-orders-card">
				<div className="orders-content-section">
					<TableContainer>
						<Table className={classes.table} aria-label="caption table">
							<TableHead>
								<TableRow>
									<TableCell className={classes.tableHeader}>Id</TableCell>
									<TableCell align="right" className={classes.tableHeader}>Status</TableCell>
									<TableCell align="right" className={classes.tableHeader}>Date</TableCell>
									<TableCell align="right" className={classes.tableHeader}>Customer</TableCell>
									<TableCell align="right" className={classes.tableHeader}>Phone number</TableCell>
									<TableCell align="right" className={classes.tableHeader}>Total (Ksh)</TableCell>
								</TableRow>
							</TableHead>
							<Modal
								aria-labelledby="transition-modal-title"
								aria-describedby="transition-modal-description"
								className={classes.modal}
								open={open}
								onClose={handleClose}
								closeAfterTransition
								BackdropComponent={Backdrop}
								BackdropProps={{
									timeout: 500,
								}}
							>
								<Fade in={open}>
									<div className={`${classes.paper} order-details-container`}>
										<div className="new-post-title-container order-details">
											<h4 className="new-post-title order-details-title">Order details</h4>
											<GrClose className="close-btn" onClick={handleClose} />
										</div><br />
										<TableContainer>
											<Table className={classes.table} aria-label="caption table">
												<TableHead>
													<TableRow>
														<TableCell className={classes.tableHeader}>Tracking Id</TableCell>
														<TableCell align="right" className={classes.tableHeader}>Items</TableCell>
														<TableCell align="right" className={classes.tableHeader}>Status</TableCell>
														<TableCell align="right" className={classes.tableHeader}>Discounts</TableCell>
														<TableCell align="right" className={classes.tableHeader}>Customer</TableCell>
														<TableCell align="right" className={classes.tableHeader}>Phone number</TableCell>
														<TableCell align="right" className={classes.tableHeader}>Date</TableCell>
														<TableCell align="right" className={classes.tableHeader}>Total (Ksh)</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													<TableRow>
														<TableCell
															component="th"
															scope="row"
															className={classes.tableBody}
														>#abc123</TableCell>
														<TableCell align="right" className={`${classes.tableBody} item-unordered-list`}>
															<ul>
																<li>Tomatoes</li>
																<li>Bananas</li>
																<li>Kales</li>
																<li>Oranges</li>
															</ul>
														</TableCell>
														<TableCell className={`pending`} align="right" className={classes.tableBody}>Pending</TableCell>
														<TableCell align="right" className={classes.tableBody}>5%</TableCell>
														<TableCell align="right" className={classes.tableBody}>John Doe</TableCell>
														<TableCell align="right" className={classes.tableBody}>0711234543</TableCell>
														<TableCell align="right" className={classes.tableBody}>01-01-2020</TableCell>
														<TableCell align="right" className={classes.tableBody}>5000</TableCell>
													</TableRow>
												</TableBody>
											</Table>
										</TableContainer>
									</div>
								</Fade>
							</Modal>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.id}>
										<TableCell
											component="th"
											scope="row"
											className={`${classes.tableBody} row-id`}
											onClick={handleOpen}
										>{row.id}</TableCell>
										<TableCell className={row.status} align="right" className={classes.tableBody}>{row.status}</TableCell>
										<TableCell align="right" className={classes.tableBody}>{row.date}</TableCell>
										<TableCell align="right" className={classes.tableBody}>{row.customer}</TableCell>
										<TableCell align="right" className={classes.tableBody}>{row.phoneNumber}</TableCell>
										<TableCell align="right" className={classes.tableBody}>{row.total}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</Card>
			<Card className="mb mb-farmer-orders-card">
				<div className="mb-farmer-item-row">
					<b>Tracking Id:</b>
					<p>#abc123</p>
				</div>
				<div className="mb-farmer-item-row">
					<b>Items:</b>
					<ul className="item-unordered-list">
						<li>Tomatoes</li>
						<li>Bananas</li>
						<li>Kales</li>
						<li>Oranges</li>
					</ul>
				</div>
				<div className="mb-farmer-item-row">
					<b>Status:</b>
					<p>Pending</p>
				</div>
				<div className="mb-farmer-item-row">
					<b>Date:</b>
					<p>01-01-2020</p>
				</div>
				<div className="mb-farmer-item-row">
					<b>Customer:</b>
					<p>John Doe</p>
				</div>
				<div className="mb-farmer-item-row">
					<b>Phone Number:</b>
					<p>0734346567</p>
				</div>
				<div className="mb-farmer-item-row">
					<b>Total:</b>
					<p>5000</p>
				</div>
			</Card><br />
			<Card className="mb mb-farmer-orders-card">
				<div className="mb-farmer-item-row">
					<b>Tracking Id:</b>
					<p>#abc124</p>
				</div>
				<div className="mb-farmer-item-row">
					<b>Items:</b>
					<ul className="item-unordered-list">
						<li>Apples</li>
						<li>Oranges</li>
						<li>Ovacadoes</li>
					</ul>
				</div>
				<div className="mb-farmer-item-row">
					<b>Status:</b>
					<p>Shipping</p>
				</div>
				<div className="mb-farmer-item-row">
					<b>Date:</b>
					<p>01-04-2020</p>
				</div>
				<div className="mb-farmer-item-row">
					<b>Customer:</b>
					<p>Jane Doe</p>
				</div>
				<div className="mb-farmer-item-row">
					<b>Phone Number:</b>
					<p>0756768345</p>
				</div>
				<div className="mb-farmer-item-row">
					<b>Total:</b>
					<p>10000</p>
				</div>
			</Card>
		</div>
	);
}


export default FarmersOrdersList;