import React from 'react';
import { NavLink } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { addItem } from '../actions/cart'
import {
	FaTwitter,
	FaFacebookF,
	FaInstagram
} from "react-icons/fa";
import { Image } from 'cloudinary-react';

import Header from '../components/Header';
import MobileNav from '../components/MobileNav';

const port = window.location.port;
const localEnv = (port === "8080");
const beans = localEnv && require('../assets/beans.jpg');
const carrots = localEnv && require('../assets/carrots.jpg');
const tomatoes = localEnv && require('../assets/tomatoes.jpg');
const mangoes = localEnv && require('../assets/mangoes.jpg');
const vegetables = localEnv && require('../assets/vegetables.jpg');
const peas = localEnv && require('../assets/peas.jpg');

const imgs = [
	[carrots, 'staticAssets/carrots_k7k2ku'],
	[peas, 'staticAssets/peas_vkpymp'],
	[tomatoes, 'staticAssets/tomatoes_arzns2'],
	[mangoes, 'staticAssets/mangoes_ksuvfs'],
	[vegetables, 'staticAssets/vegetables_bqz9sy']
];

const ProductItem = ({addItem,cart}) => {
	const [value, setValue] = React.useState(2);
	
	const renderImg = (port, localImgUrl, hostedUrl, className, id="") => {
		switch(port) {
			case "":
				return (
					<Image
						key={hostedUrl}
						publicId={hostedUrl}
						crop="scale"
						alt={className}
						className={className}
					/>
				);
			case "8080":
				return (
					<img
						key={localImgUrl}
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
		<div className="product-item-container">
			<Header />
			<div className="single-product-item">
				<div className="product-img-details">
					<div className="product-item-img">
						<div className="product-item-main-img">
							{renderImg(port, beans, "staticAssets/beans_jgdn6y", "product-main-img")}
						</div>
						<div className="product-item-sub-img">
							{
								imgs.map(img => renderImg(port, img[0], img[1], "product-sub-img"))
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
							<button className="add-to-cart-btn" onClick={() => addItem(cart)}>ADD TO CART</button>
						</div>
					</div>
				</div><br /><br /><br /><br />
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
						<div className="description-text-content">
							<p>This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.</p><br />
							<span className="share-section">
								<span>Share on social media:</span>
								<span className="share-social-media">
									<FaTwitter className="social-media-icon" />
									<FaFacebookF className="social-media-icon" />
									<FaInstagram className="social-media-icon" />
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
			<MobileNav />
		</div>
	);
}

const mapStateToProps = state => ({
	cart : state.cart
})

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
