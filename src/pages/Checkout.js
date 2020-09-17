import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { Image, Transformation } from 'cloudinary-react';

import { list, displayIcon } from '../components/Header';
import { CheckoutForm } from '../components/CheckoutForm';
import MobileNav from '../components/MobileNav';


const Checkout = () => {
	const [state, setState] = React.useState({
		right: false
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, ['right']: open });
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
							<Image publicId="staticAssets/tree_u1brqs" crop="scale" alt="tree seedling" className="register-app-logo">
								<Transformation quality="auto" fetchFormat="auto" />
							</Image>
			        		Zao Bora
		    			</h2>
		    			<h5 className="mb mb-register-title">
							<Image publicId="staticAssets/tree_u1brqs" crop="scale" alt="tree seedling" className="register-app-logo">
								<Transformation quality="auto" fetchFormat="auto" />
							</Image>
			        		Zao Bora
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
			            {list('right', toggleDrawer, displayIcon)}
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
								<Image publicId="staticAssets/tomatoes_arzns2" alt="staticAssets/tomatoes_arzns2" className="checkout-cart-img">
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
								<Image publicId="staticAssets/peas_vkpymp" alt="staticAssets/peas_vkpymp" className="checkout-cart-img">
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
								<Image publicId="staticAssets/carrots_k7k2ku" alt="staticAssets/carrots_k7k2ku" className="checkout-cart-img">
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

export default Checkout;