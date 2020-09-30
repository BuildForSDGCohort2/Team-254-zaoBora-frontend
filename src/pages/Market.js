// Market page

import React from 'react';
import { NavLink } from 'react-router-dom';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import Carousel from 'react-material-ui-carousel';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
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
import Pagination from '@material-ui/lab/Pagination';
import { Image } from 'cloudinary-react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import ItemListStyle from '../components/ItemListStyle';
import MobileNav from '../components/MobileNav';
import filterProducts from '../selectors/products';
import { setTextFilter } from '../actions/filters';
import { RenderResMsg } from '../utils/Common';

const port = window.location.port;
const localEnv = (port === "8080");
const beans = localEnv && require('../assets/beans.jpg');
const carrots = localEnv && require('../assets/carrots.jpg');
const peas = localEnv && require('../assets/peas.jpg');


const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		border: '.1rem solid #BFBFBF',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		fontSize: '1.5rem',
		color: '#666',
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
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

const Slider = () => {
	const items = [{
		image: 'staticAssets/beans_jgdn6y',
		localImg: beans,
		name: "Random Name #1",
		description: "Probably the most random thing you have ever seen!"
	},
	{
		image: 'staticAssets/carrots_k7k2ku',
		localImg: carrots,
		name: "Random Name #2",
		description: "Hello World!"
	},
	{
		image: 'staticAssets/peas_vkpymp',
		localImg: peas,
		name: "Random Name #3",
		description: "Hello World Again!"
	}];

	return (
		<Carousel
			interval="3000"
			animation="slide"
		>
			{
				items.map((item, i) => <Item key={i} item={item} />)
			}
		</Carousel>
	);
}

const Item = ({
	item: { image, localImg }
}) => {

	const renderImg = (port, className, id = "") => {
		switch (port) {
			case "":
				return (
					<Image
						publicId={image}
						crop="scale"
						alt={className}
						className={className}
					/>
				);
			case "8080":
				return (
					<img
						src={localImg}
						alt={className}
						className={className}
						id={id}
					/>
				)
			default:
				return;
		}
	}

	return renderImg(port, "slider-image-item");
}

const Market = ({
	products,
	filters,
	setTextFilter,
	resMsg
}) => {
	console.log(products);
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const [styleType, setStyleType] = React.useState('grid');
	const deviceHeightBool = window.innerWidth >= 720;

	setTimeout(
		() => {
			setOpen(false)
			/** Delete msg here */
		}, 10000
	)

	const setDisplayStyle = (e) => {
		const list = document.querySelector('.list');
		const grid = document.querySelector('.grid');
		const value = e.currentTarget.getAttribute('data-display-type');

		console.log(value)

		switch (value) {
			case 'grid':
				grid.style.color = '#4caf50';
				list.style.color = '#BFBFBF';
				setStyleType('grid')
				break;
			case 'list':
				grid.style.color = '#BFBFBF';
				list.style.color = '#4caf50';
				setStyleType('list')
				break;
			default:
				return;
		}
	}

	return (
		<div className="market-container">
			<Header />
			{resMsg.msg && <RenderResMsg type={resMsg.type} msg={resMsg.msg} title="Info" />}
			<div className="product-list-filters">
				<div className="product-list-filters-container">
					<div className="image-slider">
						<Slider />
					</div>
					<div className="product-filters">
						<div className="product-filters-results">
							<small>Showing <b>6</b> results out of <b>50</b></small>
						</div>
						{
							deviceHeightBool && <div className="product-filters-container">
								<div className="display-style">
									<div className="display-style-container">
										<GiHamburgerMenu
											onClick={setDisplayStyle}
											data-display-type="list"
											className="list"
											style={{
												fontSize: 27,
												cursor: 'pointer',
												color: '#BFBFBF'
											}}
										/>
										<CgMenuGridO
											onClick={setDisplayStyle}
											data-display-type="grid"
											className="grid"
											style={{
												fontSize: 27,
												cursor: 'pointer',
												color: '#4caf50'
											}}
										/>
									</div>
								</div>
								<div className="search-bar">
									<div className={classes.search}>
										<div className={classes.searchIcon}>
											<SearchIcon />
										</div>
										<InputBase
											placeholder="Search…"
											classes={{
												root: classes.inputRoot,
												input: classes.inputInput,
											}}
											value={filters.text}
											onChange={e => setTextFilter(e.target.value)}
											inputProps={{ 'aria-label': 'search' }}
										/>
									</div>
								</div>
							</div>
						}
					</div>
					<div className="product-list">
						{
							styleType === 'list' ? <ItemListStyle /> : <div
								className="product-list-container"
							>
								{
									products.map(product => (
										<div className="product-list-item" key={product.id}>
											<Card className={classes.fontSize}>
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
													title={`${product.seller}`}
													subheader={product.date}
												/>
												<NavLink to={`/product/${product.id}/description`} className="product-nav-link">
													<CardMedia
														className={classes.media}
														image={localEnv ? product.localImg : product.imgUrl}
														title="Paella dish"
													/>
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
														<IconButton aria-label="cart">
															<FaCartPlus
																style={{
																	fontSize: '2rem'
																}}
																/>
														</IconButton>
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
													</CardActions>
												</NavLink>
											</Card>
										</div>
									))
								}
							</div>
						}
					</div>
					{
						!!products.length && <div
							className="paginator"
						>
							<div className="paginator-container">
								<Pagination count={10} variant="outlined" shape="rounded" />
							</div>
						</div>
					}
				</div>
			</div>
			<MobileNav />
		</div>
	);
}


const mapStateToProps = ({ products, filters, resMsg }) => ({
	filters,
	resMsg,
	products: filterProducts(products, filters)
})

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Market);
