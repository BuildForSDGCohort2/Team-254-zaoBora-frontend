import React, { Fragment } from 'react';
import { makeStyles, responsiveFontSizes, createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Card from '@material-ui/core/Card';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

import Header from '../components/Header';
import MobileNav from '../components/MobileNav';

import { connect } from 'react-redux'
import { loadCurrentOrder } from '../actions/orders'

const port = window.location.port;
const localEnv = (port === "8080");
const tomatoes = localEnv && require('../assets/tomatoes.jpg');
const beans = localEnv && require('../assets/beans.jpg');
const peas = localEnv && require('../assets/peas.jpg');

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

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Cart = ({ orders, loadCurrentOrder }) => {
	const classes = useStyles();

	const createData = (item, localImg, img, quantity, price, total) => {
		return { item, img, localImg, quantity, price, total };
	}

	const rows = [
		createData('Tomatoes', tomatoes, 'staticAssets/tomatoes_arzns2', 3, 500, 1500),
		createData('Beans', beans, 'staticAssets/beans_jgdn6y', 20, 250, 5000),
		createData('Peas', peas, 'staticAssets/peas_vkpymp', 10, 400, 4000),
	];

	const renderImg = (port, localImgUrl, hostedUrl, className) => {
		switch(port) {
			case "":
				return (
					<Image
						publicId={hostedUrl}
						crop="scale"
						alt={className}
						className={className}
					>
						<Transformation quality="auto" fetchFormat="auto" />
					</Image>
				);
			case "8080":
				return (
					<img
						src={localImgUrl}
						alt={className}
						className={className}
					/>
				)
			default:
				return;
		}
	}

	return (
		<Fragment>
			<Header />
			<div className="cart-container">
				<div className="cart-container-wrapper">
					<div className="cart-title">
						<p>My cart ({3} items)</p>
					</div>
					<div className="cart-content">
						<div className="mb mb-cart-items">
							{rows.map(row => (
								<div key={row.item} className="mb-cart-item-container">
									<Card>
										<div className="item-content">
											<div className="cart-img-container">
												{renderImg(port, row.localImg, row.img, "cart-img")}
											</div>
											<div className="item-details">
												<b>Seller: John Doe</b>
												<p>Description: {row.item}</p>
												<p>Unit Price {row.price}</p>
												<p>Total {row.total}</p>
											</div>
										</div>
										<div className="mb-cart-actions">
											<div className="mb-cart-actions-container">
												<div className="mb-del-icon">
													<MdDeleteForever
														style={{
															color: '#4caf50',
															fontSize: '2rem'
														}}
													/>
												</div>
												<div className="mb-modify-quantity">
													<ButtonGroup>
														<Button
															aria-label="reduce"
															onClick={() => {
																// setCount(Math.max(count - 1, 0));
																console.log("count")
															}}
														>
															<RemoveIcon fontSize="small" />
														</Button>
															<TextField
																variant="outlined"
																name="quantity"
																type="number"
																value={row.quantity}
																onChange={() => {}}
															/>
														<Button
															aria-label="increase"
															onClick={() => {
																// setCount(count + 1);
																console.log("count")
															}}
														>
															<AddIcon fontSize="small" />
														</Button>
													</ButtonGroup>
												</div>
											</div>
										</div>
									</Card>
								</div>
							))}
						</div>
						<div className="dsk cart-items">
							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label="caption table">
									<TableHead>
										<TableRow>
											<TableCell className={classes.tableHeader}>Item</TableCell>
											<TableCell align="right" className={classes.tableHeader}>Quantity (Kg)</TableCell>
											<TableCell align="right" className={classes.tableHeader}>Unit Price (Ksh)</TableCell>
											<TableCell align="right" className={classes.tableHeader}>Total (Ksh)</TableCell>
											<TableCell align="right" className={classes.tableHeader}>Action</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<TableRow key={row.item}>
												<TableCell component="th" scope="row" className={classes.tableBody}>
													<div className="item-content">
														{renderImg(port, row.localImg, row.img, "cart-img")}
														<div className="item-details">
															<b>Seller: John Doe</b>
															<p>{row.item}</p>
														</div>
													</div>
												</TableCell>
												<TableCell align="right" className={classes.tableBody}>{row.quantity}</TableCell>
												<TableCell align="right" className={classes.tableBody}>{row.price}</TableCell>
												<TableCell align="right" className={classes.tableBody}>{row.total}</TableCell>
												<TableCell align="right" className={classes.tableBody}><button className="remove-cart-item">Remove</button></TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</div>
						<div className="cart-total-content">
							<div className="cart-total-content-container">
								<div className="cart-subtotal crt-total">
									<Typography variant="h5" gutterBottom>Subtotal</Typography>
									<Typography variant="h4" gutterBottom className={`${classes.color} value-content`}>Ksh10,500</Typography>
								</div>
								<div className="cart-other-fees crt-total">
									<Typography variant="h5" gutterBottom>Fee</Typography>
									<Typography variant="h4" gutterBottom className={`${classes.color} value-content`}>5%</Typography>
								</div>
								<div className="cart-total crt-total">
									<Typography variant="h5" gutterBottom>Total</Typography>
									<Typography variant="h4" gutterBottom className={`${classes.color} value-content`}>Ksh11,025</Typography>
								</div>
								<div className="cart-option-btns">
									<Link
										to="/"
										className="cart-btn outlined"
									>
										Continue Shopping
									</Link>
									<Link
										to="/checkout"
										className="cart-btn contained"
									>
										Proceed to Checkout
									</Link>
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

const mapStateToProps = (state) => ({
	orders: state.orders
})

export default connect(mapStateToProps)(Cart);
