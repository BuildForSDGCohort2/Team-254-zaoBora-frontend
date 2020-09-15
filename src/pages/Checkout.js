import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';

import { list, displayIcon } from '../components/Header';
import { CheckoutForm } from '../components/CheckoutForm';
import MobileNav from '../components/MobileNav';
import tree from '../assets/tree.png';
import mpesa from '../assets/mpesa.png';
import royparcel from '../assets/royparcel.png';


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
							<img src={tree} alt="tree seedling" className="register-app-logo" />
			        		Zao Bora
		    			</h2>
		    			<h5 className="mb mb-register-title">
							<img src={tree} alt="tree seedling" className="register-app-logo" />
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
						<Card className="shipping-address-form-card">
							<h4 className="shipping-address-title">Shipping Address</h4>
							<CheckoutForm />
						</Card>
					</div>
					<div className="mode-of-payment">
						<Card>
							<h4 className="shipping-address-title">Mode of Payment</h4>
							<div className="payment-logo">
								<img src={mpesa} alt="lipa na mpesa logo" className='lipa-na-mpesa' />
							</div>
						</Card>
					</div>
					<div className="shipping-method">
						<Card>
							<h4 className="shipping-address-title">Shipping Method</h4>
							<div className="payment-logo">
								<img src={royparcel} alt="royparcel logo" className='royparcel-logo' />
							</div>
						</Card>
					</div>
					<div className="checkout-options">
						<NavLink to="/cart">back to cart</NavLink>
						<NavLink to="/profile/orders">confirm purchase</NavLink>
					</div>
				</div>
				<div className="cart-items-section">
					<Card>
						cart section
					</Card>
				</div>
			</div>
			<MobileNav />
		</div>
	);
}

export default Checkout;