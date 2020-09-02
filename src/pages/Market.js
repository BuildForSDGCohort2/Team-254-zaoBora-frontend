import React, { Fragment, useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import beans from '../assets/beans.jpg';
import carrots from '../assets/carrots.jpg';
import peas from '../assets/peas.jpg';


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
	}
}));

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

	const setDisplayStyle = (e) => {
		const list = document.querySelector('.list');
		const grid = document.querySelector('.grid');
		const value = e.currentTarget.getAttribute('data-display-type');

		console.log(value)

		switch(value) {
			case 'grid':
				grid.style.color = '#4caf50';
				list.style.color = '#BFBFBF';
				break;
			case 'list':
				grid.style.color = '#BFBFBF';
				list.style.color = '#4caf50';
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
						<div className="product-filters-container">
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
					</div>
					<div className="product-list">list</div>
					<div className="paginator">Paginator</div>
				</div>
			</div>
			<MobileNav />
		</div>
	);
}

export default Market;