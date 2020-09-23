// Orders reducer
const ordersReducerDefaultState = {
  pendingOrders:[
    {
        item: 'Tomatoes',
        img: 'staticAssets/tomatoes_arzns2',
        status: 'pending',
        date: '01-01-2020',
        total: 1500,
        id: '#abc123'
    },
    {
        item: 'Beans',
        img: 'staticAssets/beans_jgdn6y',
        status: 'pending',
        date: '01-04-2020',
        total: 4000,
        id: '#def456'
    }
  ],
 completeOrders: [
   {
       item: 'Tomatoes',
       img: 'staticAssets/tomatoes_arzns2',
       status: 'complete',
       date: '01-01-2020',
       total: 1500,
       id: '#abc123'
   },
 ]
}

export default (state = ordersReducerDefaultState, action) => {
    switch (action.type) {
      case 'PLACE_ORDER':
          return {
            ...state,
            pendingOrders: action.payload
          };
      case 'COMPLETE_ORDER':
          return {
            ...state,
            completeOrders: action.payload
          };
      case 'PURCHASE_CART_ITEM':
          return {
            ...state,
            pendingOrders: action.payload
          };
      case 'CANCEL_ORDER':
          return {
            ...state,
            pendingOrders: action.payload
          };
      case 'LOAD_CURRENT_ORDER':
          return {
            ...state,
            pendingOrders: action.payload
          };
      case 'CLEAR_ITEM_FROM_CART':
          return {
            ...state,
            pendingOrders: action.payload
          }
        default:
            return state;
    }
}
