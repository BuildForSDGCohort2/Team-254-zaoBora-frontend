import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { Image, Transformation } from 'cloudinary-react';

import { ListMenu, displayIcon } from '../components/Header';
import { CheckoutForm } from '../components/CheckoutForm';
import MobileNav from '../components/MobileNav';

import { connect } from 'react-redux';
import { fetchProduct } from '../actions/products'

const port = window.location.port;
const localEnv = (port === "8080");
const tree = localEnv && require('../assets/tree.png');
const tomatoes = localEnv && require('../assets/tomatoes.jpg');
const carrots = localEnv && require('../assets/carrots.jpg');
const peas = localEnv && require('../assets/peas.jpg');

const Checkout = (props) => {
	const { fetchProduct, products } = props;
	const [state, setState] = React.useState({
		right: false
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, right: open });
	};

	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="checkout-header-container">
					<NavLink
						to="/"
						className="app-logo"
					>
						<h2 className="register-title">
							<Image
								publicId="staticAssets/tree_u1brqs"
								crop="scale"
								alt="App logo"
								className="register-app-logo"
								secure="true"
							>
								<Transformation quality="auto" fetchFormat="auto" />
							</Image>
						</h2>
						<h5 className="mb mb-register-title">
							<Image
								publicId="staticAssets/tree_u1brqs"
								crop="scale"
								alt="App logo"
								className="register-app-logo"
								secure="true"
							>
								<Transformation quality="auto" fetchFormat="auto" />
							</Image>
						</h5>
					</NavLink>
				</div>
				<div className="mb mobile-hamburger-menu">
					<GiHamburgerMenu
						onClick={toggleDrawer('right', true)}
						style={{
							fontSize: '2rem',
							color: '#666'
						}}
					/>
					<Drawer
						anchor={'right'}
						open={state['right']}
						onClose={toggleDrawer('right', false)}
					>
						{ListMenu('right', toggleDrawer, displayIcon)}
					</Drawer>
				</div>
			</div>
			<div className="checkout-section">
				<div className="shipping-info-section">
					<div className="shipping-address-form">
						<CheckoutForm />
					</div>
				</div>
				<div className="dsk cart-items-section">
					<Card className="cart-section-container">
						<h4 className="checkout-cart-item-title">Cart Items</h4>
						<div className="checkout-cart-item">
							<div className="checkout-cart-item-img">
								<Image
									publicId="staticAssets/tomatoes_arzns2"
									crop="scale"
									alt="Tomatoes"
									className="checkout-cart-img"
									secure="true"
								>
									<Transformation quality="auto" fetchFormat="auto" />
								</Image>
							</div>
							<div className="checkout-cart-item-info">
								<small>This impressive paella is a perfect party dish and a</small>
							</div>
							<div className="checkout-cart-item-price">
								<b><small>KES 3,000</small></b>
							</div>
						</div>
						<div className="checkout-cart-item">
							<div className="checkout-cart-item-img">
								<Image
									publicId="staticAssets/peas_vkpymp"
									crop="scale"
									alt="Tomatoes"
									className="checkout-cart-img"
									secure="true"
								>
									<Transformation quality="auto" fetchFormat="auto" />
								</Image>
							</div>
							<div className="checkout-cart-item-info">
								<small>This impressive paella is a perfect party dish and a</small>
							</div>
							<div className="checkout-cart-item-price">
								<b><small>KES 3,000</small></b>
							</div>
						</div>
						<div className="checkout-cart-item">
							<div className="checkout-cart-item-img">
								<Image
									publicId="staticAssets/carrots_k7k2ku"
									crop="scale"
									alt="Tomatoes"
									className="checkout-cart-img"
									secure="true"
								>
									<Transformation quality="auto" fetchFormat="auto" />
								</Image>
							</div>
							<div className="checkout-cart-item-info">
								<small>This impressive paella is a perfect party dish and a</small>
							</div>
							<div className="checkout-cart-item-price">
								<b><small>KES 3,000</small></b>
							</div>
						</div>
					</Card>
					<div className="checkout-total-cost">
						<div className="checkout-subtotal-total">
							<p className="checkout-total-title">Subtotal</p>
							<h3 className="checkout-total-price">KES 9,000</h3>
						</div>
						<div className="checkout-shipping-total">
							<p className="checkout-total-title">Shipping</p>
							<h3 className="checkout-total-price">-</h3>
						</div>
						<div className="checkout-cumulative-total">
							<p className="checkout-total-title">Total</p>
							<h3 className="checkout-total-price">KES 9,000</h3>
						</div>
					</div>
				</div>
			</div>
			<MobileNav />
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	fetchProduct: pid => dispatch(fetchProduct(pid))
})

const mapStateToProps = state => ({
	products: state.products
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
