/**
 * This file contains a filter function for the orders
 */


export default (orders, { orderText, sortBy }) => {
    const newList = [];
    let filterItems = !!orders.length ? orders.filter(
        order => order.item.toLowerCase().includes(orderText.toLowerCase())
    // eslint-disable-next-line array-callback-return
    ).filter((item) => {
        if (sortBy === item.status) {
            newList.push(item)
        }

        return sortBy !== item.status;
    }) : orders;
    
    filterItems = newList.concat(filterItems);

    return filterItems
};