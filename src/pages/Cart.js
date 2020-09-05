import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Header from '../components/Header';
import MobileNav from '../components/MobileNav';

const useStyles = makeStyles({
	table: {
		minWidth: 650
	},
	tableHeader: {
		fontSize: '1.8rem'
	},
	tableBody: {
		fontSize: '1.5rem'
	},
	color: {
		color: '#666'
	}
});

const Cart = () => {
	const classes = useStyles();

	const createData = (item, quantity, price, total) => {
		return { item, quantity, price, total };
	}

	const rows = [
		createData('Tomatoes', 159, 6.0, 24),
		createData('Beans', 237, 9.0, 37),
		createData('Peas', 262, 16.0, 24),
	];

	return (
		<Fragment>
			<Header />
			<div className="cart-container">
				<div className="cart-container-wrapper">
					<div className="cart-title">
						<p>My cart ({2} items)</p>
					</div>
					<div className="cart-content">
						<div className="cart-items">
							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label="caption table">
									<TableHead>
										<TableRow>
											<TableCell className={classes.tableHeader}>Item</TableCell>
											<TableCell align="right" className={classes.tableHeader}>Quantity (Kg)</TableCell>
											<TableCell align="right" className={classes.tableHeader}>Unit Price</TableCell>
											<TableCell align="right" className={classes.tableHeader}>Total</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<TableRow key={row.name}>
												<TableCell component="th" scope="row" className={classes.tableBody}>
													{row.item}
												</TableCell>
												<TableCell align="right" className={classes.tableBody}>{row.quantity}</TableCell>
												<TableCell align="right" className={classes.tableBody}>{row.price}</TableCell>
												<TableCell align="right" className={classes.tableBody}>{row.total}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</div>
						<div className="cart-total-content">
							<div className="cart-total-content-container">
								<div className="cart-subtotal crt-total">
									<Typography variant="h4" gutterBottom>Subtotal</Typography>
									<Typography variant="h4" gutterBottom className={classes.color}>33000</Typography>
								</div>
								<div className="cart-other-fees crt-total">
									<Typography variant="h4" gutterBottom>Fee</Typography>
									<Typography variant="h4" gutterBottom className={classes.color}>7%</Typography>
								</div>
								<div className="cart-total crt-total">
									<Typography variant="h4" gutterBottom>Total</Typography>
									<Typography variant="h4" gutterBottom className={classes.color}>33000</Typography>
								</div>
								<div className="cart-option-btns">
									<button className="cart-btn outlined">
										Continue Shopping
									</button>
									<button className="cart-btn contained">
										Proceed to Checkout
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<MobileNav />
		</Fragment>
	);
}

export default Cart;