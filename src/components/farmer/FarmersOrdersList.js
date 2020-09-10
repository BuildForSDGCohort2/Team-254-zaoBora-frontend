import React, { Fragment } from 'react';
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
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Card from '@material-ui/core/Card';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';

import beans from '../../assets/beans.jpg';
import tomatoes from '../../assets/tomatoes.jpg';


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

const FarmersOrdersList = () => {
	const classes = useStyles();

	const createData = (id, status, date, customer, phoneNumber, total) => {
		return { id, status, phoneNumber, date, total, customer };
	}

	const rows = [
		createData('#abc123', 'pending', '01-01-2020', '@JohnDoe', '0711234543', 1500),
		createData('#def456', 'complete', '01-01-2020', '@JaneDoe', '0745678333', 5000),
	];

	return (
		<div className="farmer-orders-container">
			<h4>Orders</h4><br />
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
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.id}>
										<TableCell component="th" scope="row" className={`${classes.tableBody} row-id`}>{row.id}</TableCell>
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
		</div>
	);
}


export default FarmersOrdersList;