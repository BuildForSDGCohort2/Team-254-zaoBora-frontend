import React, { Fragment } from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Formik } from "formik";
import { FiEdit } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { RiDeleteBinFill } from "react-icons/ri";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import NewPostForm from './NewPostForm';


const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
		boxShadow: theme.shadows[5],
		borderRadius: '.3rem',
		outline: 'none',
		width: '80vw',
		height: '80vh'
	},
	paper2: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
		boxShadow: theme.shadows[5],
		borderRadius: '.3rem',
		outline: 'none',
	},
}));

const theme = createMuiTheme({
	overrides: {
	    MuiInputLabel: {
	    	root: {
	        	"&$focused": {
	          		color: "#4dbc51"
	        	}
	    	}
	    }
	},
	palette: {
		primary: {
			main: '#4dbc51',
			contrastText: "#fff"
		},
	}
});

const FarmerPostList = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [openConfirmDelPost, setOpenConfirmDelPost] = React.useState(false);
	const [post, setPostValues] = React.useState({
		title: 'New Post',
        postName: '',
        description: ''
	});openConfirmDelPost

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpenConfirmDelPost = () => {
		setOpenConfirmDelPost(true);
	};

	const handleCloseConfirmDelPost = () => {
		setOpenConfirmDelPost(false);
	};

	const handleEditPost = () => {
		const post = {
			title: 'Update Post',
	        postName: 'Farmer post 1',
	        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
		}

		setPostValues({...post});
		handleOpen()
	}

	const handleNewPost = () => {
		const post = {
			title: 'New Post',
	        postName: '',
	        description: ''
		}

		setPostValues({...post});
		handleOpen()
	}

	return (
		<div className="farmer-profile-card-container">
			<div className="new-post-container">
				<h4>My Posts (2)</h4>
				<div className="new-post" onClick={handleNewPost}>
					<BsPlusSquare />
					<p>new post</p>
				</div>
			</div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<div className="new-post-title-container">
							<h4 className="new-post-title">{post.title}</h4>
							<GrClose className="close-btn" onClick={handleClose} />
						</div><br />
						<Formik
				            initialValues={{
				                postName: post.postName,
				                description: post.description,
				                img: ''
				            }}
				            // validationSchema={updateAccountSchema}
				            onSubmit={(values, { setSubmitting, resetForm }) => {
				            	console.log(values)
				            }}
				        >
				        	{props => <NewPostForm {...props} />}
				        </Formik>
					</div>
				</Fade>
			</Modal>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={openConfirmDelPost}
				onClose={handleCloseConfirmDelPost}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={openConfirmDelPost}>
					<div className={classes.paper2}>
						<div className="del-post-title-container">
							<GrClose className="close-btn" onClick={handleCloseConfirmDelPost} />
						</div>
						<p>Are you sure you want to delete this post?</p>
						<div className="farmer-del-action-btns">
							<Grid item xs={4}>
								<ThemeProvider theme={theme}>
									<div className="danger-zone">
										<Button
											type="submit"
											fullWidth
											variant="contained"
											color="primary"
											className={`s-font-size ${classes.submit}`}
										>
											YES
										</Button>
									</div>
								</ThemeProvider>
							</Grid>
						</div>
					</div>
				</Fade>
			</Modal>
			<div className="post-card-list">
				<Card className="farmer-profile-card">
					<div className="farmer-post-name">
						<p>Farmer post 1</p>
					</div>
					<div className="farmer-post-description">
						<p>This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.</p>
					</div>
					<div className="farmer-post-actions">
						<FiEdit className="post-action-btn edit" onClick={handleEditPost} />
						<RiDeleteBinFill className="post-action-btn del" onClick={handleOpenConfirmDelPost} />
					</div>
				</Card><br />
				<Card className="farmer-profile-card">
					<div className="farmer-post-name">
						<p>Farmer post 2</p>
					</div>
					<div className="farmer-post-description">
						<p>This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.</p>					
					</div>
					<div className="farmer-post-actions">
						<FiEdit className="post-action-btn edit" onClick={handleEditPost} />
						<RiDeleteBinFill className="post-action-btn del" onClick={handleOpenConfirmDelPost} />
					</div>
				</Card>
			</div>
		</div>
	);
}

export default FarmerPostList;