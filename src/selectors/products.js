/**
 * This file contains a filter function for the products
 */


export default (products, { text, sortBy, min, max }) => {
    const filteredItems = !!products.length ? products.filter(
        product => product.title.toLowerCase().includes(text.toLowerCase())
    // eslint-disable-next-line array-callback-return
    ).sort((a, b) => {
        if (sortBy === 'price') {
            return a.price > b.price ? 1 : -1;
        }
    }) : products;

    return filteredItems
};