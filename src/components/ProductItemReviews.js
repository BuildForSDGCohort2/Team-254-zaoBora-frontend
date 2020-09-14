import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Formik } from "formik";
import { GrClose } from "react-icons/gr";

import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import beans from '../assets/beans.jpg';
import carrots from '../assets/carrots.jpg';
import peas from '../assets/peas.jpg';
import tomatoes from '../assets/tomatoes.jpg';
import mangoes from '../assets/mangoes.jpg';
import vegetables from '../assets/vegetables.jpg';


const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatar: {
		backgroundColor: '#4caf50',
	},
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.success.main,
        padding: theme.spacing(1.5)
    },
	paper: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
		boxShadow: theme.shadows[5],
		borderRadius: '.3rem',
		outline: 'none',
		width: '80vw',
		// height: '80vh'
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

const imgs = [carrots, peas, tomatoes, mangoes, vegetables];

const ProductItemReviews = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(2);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleNewReview = () => {
		handleOpen()
	}

	return (
		<div className="product-item-review-container">
			<Header />
			<div className="single-product-item">
				<div className="product-img-details">
					<div className="product-item-img">
						<div className="product-item-main-img">
							<img src={beans} className="product-main-img" />
						</div>
						<div className="product-item-sub-img">
							{
								imgs.map(img => (
									<img
										key={img}
										src={img}
										alt={img}
										className="product-sub-img"
									/>
								))
							}
						</div>
					</div>
					<div className="product-item-details">
						<div className="product-item-details-text">
							<div>
								<h1 className="product-item-title">This impressive paella is a perfect party dish and a</h1>
								<span className="product-item-rating">
									<Rating
										name="read-only"
										value={value}
										className="rating-stars"
										readOnly
									/>
									<small>(3 customer reviews)</small>
								</span>
								<div className="product-item-price">
									<small className="faded-title">price</small>
									<h1 className="price-detail">KES 5,000</h1>
								</div>
								<div className="product-item-quantity">
									<small className="faded-title">quantity (kg)</small>
									<div className="product-item-modify-quantity">
										<div className="modify-quantity-container">
											<button className="product-minus-btn product-modify-btn">-</button>
											<input type="number" className="modify-text-input" />
											<button className="product-add-btn product-modify-btn">+</button>
										</div>
									</div>
									<small className="available-items"><i>(30 kilos available)</i></small>
								</div>
							</div>
							<button className="add-to-cart-btn">ADD TO CART</button>
						</div>
					</div>
				</div><br /><br /><br className="dsk" /><br className="dsk" />
				<div className="product-item-options">
					<div className="product-item-options-wrapper">
						<div className="product-item-options-container">
							<NavLink
								to="/product/abc125/description"
								activeClassName="product-item-nav-active"
								exact={true}
								className="product-item-nav"
							>
								Description
							</NavLink>
							<NavLink
								to="/product/abc125/reviews"
								activeClassName="product-item-nav-active"
								exact={true}
								className="product-item-nav"
							>
								Reviews
							</NavLink>
						</div>
					</div>
					<div className="product-description-section">
						<div className="review-text-content">
							<div className="product-item-rating-container">
								<div className="item-rating-status-verified">
									<div className="product-item-rating">
										<Rating
											name="read-only"
											value={value}
											className="rating-stars overall-rating"
											readOnly
										/>
										<small className="total-reviews">(3 customer reviews)</small>
									</div><br />
									<div className="alert-verified-reviews">
										<Alert severity="success" className="alert-text-item">100% verified reviews</Alert>
									</div>
								</div>
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
										<div className={classes.paper}>
											<div className="new-post-title-container">
												<h4 className="new-post-title">Make a Review</h4>
												<GrClose className="close-btn" onClick={handleClose} />
											</div><br />
											<Formik
									            initialValues={{
									            	rating: 0,
									            	review: ''
									            }}
									            // validationSchema={updateAccountSchema}
									            onSubmit={(values, { setSubmitting, resetForm }) => {
									            	console.log(values)
									            }}
									        >
									        	{({ values, handleChange, errors }) => (
													<Fragment>
														<div className="rate-product-container">
															<small className="rate-product-text">Rate this product</small>
															<Rating
																name="simple-controlled"
																value={values.rating}
																onChange={handleChange}
																className="rate-product-item"
															/>
														</div><br /><br />
														<TextField
															id="review"
															label={errors.review ? 'Error' : 'Type a comment'}
															variant="outlined"
															name="review"
															value={values.review}
															onChange={handleChange}
															InputProps={{ className: classes.root }}
															helperText={errors.review ? errors.review : ''}
															error={errors.review ? true : false}
															rows={10}
															required
															fullWidth
															multiline
														/>
														<Button
															type="submit"
															fullWidth
															variant="contained"
															color="primary"
															className={`s-font-size ${classes.submit}`}
														>
															Post
														</Button>
													</Fragment>
							        			)}
									        </Formik>
										</div>
									</Fade>
								</Modal>
								<div className="add-item-review">
									<Button
										variant="contained"
										color="primary"
								        startIcon={<BorderColorIcon />}
								        onClick={handleNewReview}
									>
										Add a review
									</Button>
								</div>
							</div>
							<div className="product-review-container">
								<div className="product-review-item">
									<div className="product-review-header">
										<Avatar aria-label="recipe" className={classes.avatar}>
											J
										</Avatar>
										<div className="review-owner">
											<small className="reviewer-name">John Doe</small>
											<small className="review-date"><i>15mins ago</i></small>
											<Rating
												name="read-only"
												value={value}
												className="rating-stars"
												readOnly
											/>
										</div>
									</div>
									<div className="product-review-content">
										<p>This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.</p>
									</div>
								</div>
								<div className="product-review-item">
									<div className="product-review-header">
										<Avatar aria-label="recipe" className={classes.avatar}>
											M
										</Avatar>
										<div className="review-owner">
											<small className="reviewer-name">Marcus Njoroge</small>
											<small className="review-date"><i>4 months ago</i></small>
											<Rating
												name="read-only"
												value={3}
												className="rating-stars reviewer-rating"
												readOnly
											/>
										</div>
									</div>
									<div className="product-review-content">
										<p>This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<MobileNav />
		</div>
	);
}

export default ProductItemReviews;