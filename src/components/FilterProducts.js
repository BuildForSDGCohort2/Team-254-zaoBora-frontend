// Filtered list

import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

import FilterProductItem from './FilterProductItem';
import filterProducts from '../selectors/products';


const FilterProducts = ({ products }) => {
    return (
        <div className="filtered-results">
            <Card className="filter-item">
                {
                    products.map(
                        product => (
                            <FilterProductItem 
                                key={product.id} {...product}
                            />
                        )
                    )
                }
            </Card>
        </div>
    );
}


const mapStateToProps = ({ products, filters }) => ({
    products: filterProducts(products, filters)
});

const mapDispatchToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(FilterProducts);