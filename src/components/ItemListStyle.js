import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FaCartPlus } from "react-icons/fa";
import Badge from '@material-ui/core/Badge';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { Image, Transformation } from 'cloudinary-react';

import filterProducts from '../selectors/products';

const port = window.location.port;
const localEnv = (port === "8080");
const carrots = localEnv && require('../assets/carrots.jpg');
const tomatoes = localEnv && require('../assets/tomatoes.jpg');
const mangoes = localEnv && require('../assets/mangoes.jpg');
const peas = localEnv && require('../assets/peas.jpg');


const useStyles = makeStyles((theme) => ({
	avatar: {
		backgroundColor: '#4caf50',
	},
	fontSize: {
		fontSize: '1.5rem'
	},
	fixedHeight: {
		height: '12rem',
		marginBottom: '1.5rem',
	},
	smallFontSize: {
		fonstSize: '1.2rem'
	},
	card: {
		fontSize: '1.5rem',
		display: 'flex',
		width: '100%',
		height: '29rem'
	}
}));

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
		fontSize: '1.1rem',
		background: '#4caf50'
	},
}))(Badge);

const ItemListStyle = ({ products }) => {
	const classes = useStyles();
	const [mainImg1, setMain1Img] = React.useState('staticAssets/carrots_k7k2ku');
	const [mainImg2, setMain2Img] = React.useState('staticAssets/beans_jgdn6y');
	const [mainImg3, setMain3Img] = React.useState('staticAssets/peas_vkpymp');

	const handleChangeMainImg = (img, imgName) => {
		switch(img) {
			case 'mainImg1':
				setMain1Img(imgName)
				break;
			case 'mainImg2':
				setMain2Img(imgName)
				break;
			case 'mainImg3':
				setMain3Img(imgName)
				break;
			default:
				return;
		}

	}
	
	const renderImg = (port, localImgUrl, hostedUrl, className) => {
		switch(port) {
			case "":
				return (
					<Image
						publicId={hostedUrl}
						crop="scale"
						alt={className}
						className={className}
						onClick={() => handleChangeMainImg('mainImg1', hostedUrl)}
						secure="true"
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
						onClick={() => handleChangeMainImg('mainImg1', localImgUrl)}
					/>
				)
			default:
				return;
		}
	}

	return (
		<div className="product-list-style">
			{
				products.map(product => (
					<div className="product-list-item list-style-item" key={product.id}>
							<Card className={classes.card}>
								<div className="product-item">
									<div className="product-img">
										<div className="main-img">
											{renderImg(port, product.localImg, product.image, "product-img-item")}
										</div>
										<div className="sub-img">
											{renderImg(port, carrots, "staticAssets/carrots_k7k2ku", "sub-product-img-item")}
											{renderImg(port, tomatoes, "staticAssets/tomatoes_arzns2", "sub-product-img-item")}
											{renderImg(port, peas, "staticAssets/peas_vkpymp", "sub-product-img-item")}
											{renderImg(port, mangoes, "staticAssets/mangoes_ksuvfs", "sub-product-img-item")}
										</div>
									</div>
									<div className="product-item-content">
										<CardHeader
											className={classes.smallFontSize}
											avatar={
												<Avatar aria-label="recipe" className={classes.avatar}>
												{product.avatar}
												</Avatar>
											}
											action={
												<IconButton aria-label="settings">
													<MoreVertIcon />
												</IconButton>
											}
											title={product.seller}
											subheader={product.date}
										/>
										<NavLink to={`/product/${product.id}/description`} className="product-nav-link">
											<CardContent className={classes.fixedHeight}>
												<div
													style={{
														overflow: "hidden",
														textOverflow: "ellipsis",
														height: "100%"
													}}
												>
													<Typography variant="h5" gutterBottom>
														{product.title}
													</Typography>
													<Typography className={classes.fontSize} variant="body2" color="textSecondary" component="p">
														{product.description}
													</Typography>
												</div>
											</CardContent>
											<CardActions disableSpacing>
												<div className="action-section">
													<div className="chat-share">
														<IconButton aria-label="share">
															<ShareIcon
																style={{
																	fontSize: '2rem'
																}}
															/>
														</IconButton>
														<IconButton>
															<StyledBadge badgeContent={4} color="secondary">
																<ChatBubbleIcon
																	style={{
																		fontSize: '2rem'
																	}}
																/>
															</StyledBadge>
														</IconButton>
													</div>
													<IconButton aria-label="cart">
														<FaCartPlus
															style={{
																fontSize: '2rem'
															}}
														/>
													</IconButton>
												</div>
											</CardActions>
										</NavLink>
									</div>
								</div>
							</Card>
					</div>
				))
			}
		</div>
	);
}


const mapStateToProps = ({ products, filters }) => ({
    products: filterProducts(products, filters)
})

export default connect(mapStateToProps)(ItemListStyle);