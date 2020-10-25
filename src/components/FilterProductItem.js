import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'cloudinary-react';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';

import { fetchProduct } from '../actions/products';
import {
	clickResult,
    hideResult,
    setTextFilter
} from '../actions/filters';

const port = window.location.port;

const renderImg = (port, localImg, hostedImg, className, id = "") => {
    switch (port) {
        case "":
            return (
                <Image
                    publicId={hostedImg}
                    crop="scale"
                    alt={className}
                    className={className}
                    secure="true"
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

const FilterProductItem = ({
	title,
	image,
	localImg,
	id,
    fetchProduct,
    setTextFilter,
    hideResult,
    history
}) => (
	<div
        onMouseDown={(e) => {
            e.preventDefault();
            hideResult();
            setTextFilter();
            history.push(`/product/${id}/description`)
            // fetchProduct(id)
        }}
        className="search-link-btn"
    >
		<div className="search-results">
            {renderImg(port, localImg, image, "search-imgLink")}
            <span className="search-description">{ title }</span>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
    hideResult: () => dispatch(hideResult()),
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    setTextFilter: () => dispatch(setTextFilter())
});

export default withRouter(connect(undefined, mapDispatchToProps)(FilterProductItem));