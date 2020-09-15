import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import Button from "@material-ui/core/Button";
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FaCartPlus } from "react-icons/fa";
import Badge from '@material-ui/core/Badge';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Pagination from '@material-ui/lab/Pagination';
import clsx from 'clsx';

import Header from '../components/Header';
import ItemListStyle from '../components/ItemListStyle';
import MobileNav from '../components/MobileNav';
import beans from '../assets/beans.jpg';
import carrots from '../assets/carrots.jpg';
import peas from '../assets/peas.jpg';
import tomatoes from '../assets/tomatoes.jpg';
import mangoes from '../assets/mangoes.jpg';
import vegetables from '../assets/vegetables.jpg';


export const ficticiousProduct = [{
	id: 'abc123',
	avatar: 'J',
	seller: 'John Doe',
	image: beans,
	date: "September 14, 2016",
	title: 'This impressive paella is a perfect party dish and a',
	description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
},{
	id: 'abc124',
	avatar: 'I',
	seller: 'Irene Njeri',
	image: carrots,
	date: "October 14, 2016",
	title: 'This impressive paella is a perfect party dish and a',
	description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
},{
	id: 'abc125',
	avatar: 'M',
	seller: 'Mark Njenga',
	image: peas,
	date: "January 3, 2020",
	title: 'This impressive paella is a perfect party dish and a',
	description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
},{
	id: 'abc126',
	avatar: 'T',
	seller: 'Tobius Malombe',
	image: tomatoes,
	date: "December 1, 2018",
	title: 'This impressive paella is a perfect party dish and a',
	description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
},{
	id: 'abc127',
	avatar: 'K',
	seller: 'Kevin Mutunga',
	image: mangoes,
	date: "February 14, 2020",
	title: 'This impressive paella is a perfect party dish and a',
	description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
},{
	id: 'abc128',
	avatar: 'P',
	seller: 'Philip Otieno',
	image: vegetables,
	date: "August 14, 2016",
	title: 'This impressive paella is a perfect party dish and a',
	description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
}]

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
			image: `${beans}`,
	        name: "Random Name #1",
	        description: "Probably the most random thing you have ever seen!"
	    },
	    {
	    	image: `${carrots}`,
	        name: "Random Name #2",
	        description: "Hello World!"
    	},
	    {
	    	image: `${peas}`,
	        name: "Random Name #3",
	        description: "Hello World Again!"
    }];

	return (
		<Carousel
			interval="3000"
			animation="slide"
		>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    );
}


const Item = props => (
	<img src={props.item.image} alt="crops" className="slider-image-item" />
);

const Market = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const [styleType, setStyleType] = React.useState('grid');
	const deviceHeightBool = window.innerWidth >= 720;
	const id = 'abc123';

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const setDisplayStyle = (e) => {
		const list = document.querySelector('.list');
		const grid = document.querySelector('.grid');
		const value = e.currentTarget.getAttribute('data-display-type');

		console.log(value)

		switch(value) {
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
		}
	}

	return (
		<div className="market-container">
			<Header />
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
									ficticiousProduct.map(product => (
										<div className="product-list-item" key={product.id}>
											<NavLink to={`/product/${product.id}/description`} className="product-nav-link">
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
													<CardMedia
														className={classes.media}
														image={`${product.image}`}
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
													</Card>
											</NavLink>
										</div>
									))
								}
							</div>
						}
					</div>
					<div className="paginator">
						<div className="paginator-container">
							<Pagination count={10} variant="outlined" shape="rounded" />
						</div>
					</div>
				</div>
			</div>
			<MobileNav />
		</div>
	);
}

export default Market;