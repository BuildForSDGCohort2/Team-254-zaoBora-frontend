import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import { Formik } from "formik";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";


const FarmerPostList = () => (
	<div className="farmer-profile-card-container">
		<h4>My Posts</h4><br />
		<div className="post-card-list">
			<Card className="farmer-profile-card">
				<div className="farmer-post-name">
					<p>Farmer post 1</p>
				</div>
				<div className="farmer-post-description">
					<p>This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.</p>
				</div>
				<div className="farmer-post-actions">
					<FiEdit className="post-action-btn" />
					<RiDeleteBinFill className="post-action-btn" />
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
					<FiEdit className="post-action-btn" />
					<RiDeleteBinFill className="post-action-btn" />
				</div>
			</Card>
		</div>
	</div>
);

export default FarmerPostList;