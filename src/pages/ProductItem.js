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
import {
	FaTwitter,
	FaFacebookF,
	FaInstagram
} from "react-icons/fa";
import { Image, Transformation } from 'cloudinary-react';

import Header from '../components/Header';
import MobileNav from '../components/MobileNav';


const imgs = [
	'staticAssets/carrots_k7k2ku',
	'staticAssets/peas_vkpymp',
	'staticAssets/tomatoes_arzns2',
	'staticAssets/mangoes_ksuvfs',
	'staticAssets/vegetables_bqz9sy'
];

const ProductItem = () => {
	const [value, setValue] = React.useState(2);

	return (
		<div className="product-item-container">
			<Header />
			<div className="single-product-item">
				<div className="product-img-details">
					<div className="product-item-img">
						<div className="product-item-main-img">
							<Image productId="staticAssets/beans_jgdn6y" crop="scale" className="product-main-img" />
						</div>
						<div className="product-item-sub-img">
							{
								imgs.map(img => (
									<Image
										key={img}
										productId={img}
										crop="scale"
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

export default ProductItem;