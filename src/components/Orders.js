import React from 'react';
import {
	makeStyles
} from '@material-ui/core/styles';
import { FaReceipt } from "react-icons/fa";
import { ImRedo2 } from "react-icons/im";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Image } from 'cloudinary-react';
import { connect } from 'react-redux';
import filterOrders from '../selectors/orders';

import {
	setOrderTextFilter,
	sortByStatus
} from '../actions/filters';

const port = window.location.port;
const localEnv = (port === "8080");
const tomatoes = localEnv && require('../assets/tomatoes.jpg');
const beans = localEnv && require('../assets/beans.jpg');

const useStyles = makeStyles((theme) => ({
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	table: {
		// minWidth: 650
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

const Orders = ({ orders }) => {
	const classes = useStyles();

	return (
		<div className="orders-container">
			<div className="orders-content-section">
				<TableContainer>
					<Table className={classes.table} aria-label="caption table">
						<TableHead>
							<TableRow>
								<TableCell className={classes.tableHeader}>Item</TableCell>
								<TableCell align="right" className={classes.tableHeader}>Status</TableCell>
								<TableCell align="right" className={classes.tableHeader}>Total (Ksh)</TableCell>
								<TableCell align="right" className={classes.tableHeader}>Date</TableCell>
								<TableCell align="right" className={classes.tableHeader}>Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orders.map(order => (
								<TableRow key={order.item}>
									<TableCell component="th" scope="row" className={classes.tableBody}>
										<div className="order-item-description">
											<div className="order-item-details">
												<p>Order id: {order.id}</p>
												<p>{order.item}</p>
											</div>
										</div>
									</TableCell>
									<TableCell className={`${order.status} ${classes.tableBody}`} align="right">{order.status}</TableCell>
									<TableCell align="right" className={classes.tableBody}>{order.total}</TableCell>
									<TableCell align="right" className={classes.tableBody}>{order.date}</TableCell>
									<TableCell align="right" className={classes.tableBody}>
										<div className="order-actions">
											<FaReceipt
												style={{
													fontSize: '1.5rem',
													cursor: 'pointer'
												}}
											/>
											<ImRedo2
												style={{
													fontSize: '1.5rem',
													marginTop: '1rem',
													cursor: 'pointer'
												}}
											/>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}


const mapStateToProps = ({ orders, filters }) => ({
	orders: filterOrders(orders, filters)
})

export default connect(mapStateToProps)(Orders);