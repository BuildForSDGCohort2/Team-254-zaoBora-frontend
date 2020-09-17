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
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Card from '@material-ui/core/Card';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import { Image, Transformation } from 'cloudinary-react';


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

const Orders = () => {
	const classes = useStyles();

	const createData = (item, img, status, date, total, id) => {
		return { item, img, status, date, total, id };
	}

	const rows = [
		createData('Tomatoes', 'staticAssets/tomatoes_arzns2', 'pending', '01-01-2020', 1500, '#abc123'),
		createData('Beans', 'staticAssets/beans_jgdn6y', 'complete', '01-01-2020', 5000, '#def456'),
	];

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
							{rows.map((row) => (
								<TableRow key={row.item}>
									<TableCell component="th" scope="row" className={classes.tableBody}>
										<div className="order-item-description">
											<Image productId={row.img} crop="scale" alt={row.img} className="order-img" />
											<div className="order-item-details">
												<p>Order id: {row.id}</p>
												<b>Seller: John Doe</b>
												<p>{row.item}</p>
											</div>
										</div>
									</TableCell>
									<TableCell className={row.status} align="right" className={classes.tableBody}>{row.status}</TableCell>
									<TableCell align="right" className={classes.tableBody}>{row.total}</TableCell>
									<TableCell align="right" className={classes.tableBody}>{row.date}</TableCell>
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


export default Orders;