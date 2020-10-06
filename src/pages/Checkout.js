import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { Image, Transformation } from 'cloudinary-react';

import { ListMenu, displayIcon } from '../components/Header';
import { CheckoutForm } from '../components/CheckoutForm';
import MobileNav from '../components/MobileNav';

const port = window.location.port;
const localEnv = (port === "8080");
const tree = localEnv && require('../assets/tree.png');
const tomatoes = localEnv && require('../assets/tomatoes.jpg');
const carrots = localEnv && require('../assets/carrots.jpg');
const peas = localEnv && require('../assets/peas.jpg');

const Checkout = () => {
	const [state, setState] = React.useState({
		right: false
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, right: open });
	};
	
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
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="checkout-header-container">
					<NavLink
						to="/"
						className="app-logo"
					>
		    			<h2 className="register-title">
							{renderImg(port, tree, "staticAssets/tree_u1brqs", "register-app-logo")}
		    			</h2>
		    			<h5 className="mb mb-register-title">
							{renderImg(port, tree, "staticAssets/tree_u1brqs", "register-app-logo")}
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
								{renderImg(port, tomatoes, "staticAssets/tomatoes_arzns2", "checkout-cart-img")}
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
								{renderImg(port, peas, "staticAssets/peas_vkpymp", "checkout-cart-img")}
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
								{renderImg(port, carrots, "staticAssets/carrots_k7k2ku", "checkout-cart-img")}
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

export default Checkout;
