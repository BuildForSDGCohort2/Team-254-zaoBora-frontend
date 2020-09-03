import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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

import beans from '../assets/beans.jpg';
import carrots from '../assets/carrots.jpg';
import peas from '../assets/peas.jpg';
import tomatoes from '../assets/tomatoes.jpg';
import mangoes from '../assets/mangoes.jpg';
import vegetables from '../assets/vegetables.jpg';


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

const ItemListStyle = () => {
	const classes = useStyles();

	return (
		<div className="product-list-style">
			<div className="product-list-item list-style-item">
				<Card className={classes.card}>
					<div className="product-item">
						<div className="product-img">
							<div className="main-img">
								<img
									className="product-img-item"
									src={beans}
								/>
							</div>
							<div className="sub-img">
								<img
									className="sub-product-img-item"
									src={carrots}
								/>
								<img
									className="sub-product-img-item"
									src={tomatoes}
								/>
								<img
									className="sub-product-img-item"
									src={peas}
								/>
								<img
									className="sub-product-img-item"
									src={mangoes}
								/>
							</div>
						</div>
						<div className="product-item-content">
							<CardHeader
								className={classes.smallFontSize}
								avatar={
									<Avatar aria-label="recipe" className={classes.avatar}>
									R
									</Avatar>
								}
								action={
									<IconButton aria-label="settings">
										<MoreVertIcon />
									</IconButton>
								}
								title="Shrimp and Chorizo Paella"
								subheader="September 14, 2016"
							/>
							<CardContent className={classes.fixedHeight}>
								<div
									style={{
										overflow: "hidden",
										textOverflow: "ellipsis",
										height: "100%"
									}}
								>
									<Typography className={classes.fontSize} variant="body2" color="textSecondary" component="p">
										This impressive paella is a perfect party dish and a fun meal to cook together with your
										guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
						</div>
					</div>
				</Card>
			</div>
			<div className="product-list-item list-style-item">
				<Card className={classes.card}>
					<div className="product-item">
						<div className="product-img">
							<div className="main-img">
								<img
									className="product-img-item"
									src={peas}
								/>
							</div>
							<div className="sub-img">
								<img
									className="sub-product-img-item"
									src={carrots}
								/>
								<img
									className="sub-product-img-item"
									src={tomatoes}
								/>
								<img
									className="sub-product-img-item"
									src={beans}
								/>
								<img
									className="sub-product-img-item"
									src={mangoes}
								/>
							</div>
						</div>
						<div className="product-item-content">
							<CardHeader
								className={classes.smallFontSize}
								avatar={
									<Avatar aria-label="recipe" className={classes.avatar}>
									R
									</Avatar>
								}
								action={
									<IconButton aria-label="settings">
										<MoreVertIcon />
									</IconButton>
								}
								title="Shrimp and Chorizo Paella"
								subheader="September 14, 2016"
							/>
							<CardContent className={classes.fixedHeight}>
								<div
									style={{
										overflow: "hidden",
										textOverflow: "ellipsis",
										height: "100%"
									}}
								>
									<Typography className={classes.fontSize} variant="body2" color="textSecondary" component="p">
										This impressive paella is a perfect party dish and a fun meal to cook together with your
										guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
						</div>
					</div>
				</Card>
			</div>
			<div className="product-list-item list-style-item">
				<Card className={classes.card}>
					<div className="product-item">
						<div className="product-img">
							<div className="main-img">
								<img
									className="product-img-item"
									src={carrots}
								/>
							</div>
							<div className="sub-img">
								<img
									className="sub-product-img-item"
									src={beans}
								/>
								<img
									className="sub-product-img-item"
									src={tomatoes}
								/>
								<img
									className="sub-product-img-item"
									src={peas}
								/>
								<img
									className="sub-product-img-item"
									src={mangoes}
								/>
							</div>
						</div>
						<div className="product-item-content">
							<CardHeader
								className={classes.smallFontSize}
								avatar={
									<Avatar aria-label="recipe" className={classes.avatar}>
									R
									</Avatar>
								}
								action={
									<IconButton aria-label="settings">
										<MoreVertIcon />
									</IconButton>
								}
								title="Shrimp and Chorizo Paella"
								subheader="September 14, 2016"
							/>
							<CardContent className={classes.fixedHeight}>
								<div
									style={{
										overflow: "hidden",
										textOverflow: "ellipsis",
										height: "100%"
									}}
								>
									<Typography className={classes.fontSize} variant="body2" color="textSecondary" component="p">
										This impressive paella is a perfect party dish and a fun meal to cook together with your
										guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}

export default ItemListStyle;