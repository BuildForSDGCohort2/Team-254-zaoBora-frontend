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
                <Image
                    publicId={image}
                    crop="scale"
                    alt="search-imgLink"
                    className="search-imgLink"
                    secure="true"
                />
                <span className="search-description">{title}</span>
            </div>
        </div>
    );

const mapDispatchToProps = (dispatch) => ({
    hideResult: () => dispatch(hideResult()),
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    setTextFilter: () => dispatch(setTextFilter())
});

export default withRouter(connect(undefined, mapDispatchToProps)(FilterProductItem));