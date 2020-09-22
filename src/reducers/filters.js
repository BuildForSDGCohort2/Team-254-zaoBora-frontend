/** 
 * Filter Reducer
 */


const filterReducerDefaultState = {
    text: '',
    orderText: '',
    searching: false,
    sortBy: 'open', // pending, complete, cancelled
};

export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_ORDER_TEXT_FILTER':
            return {
                ...state,
                orderText: action.text
            }
        case 'BLUR_RESULTS':
            return {
                ...state,
                searching: false
            }
        case 'FOCUS_RESULTS':
            return {
                ...state,
                searching: true
            }
        case 'HIDE_RESULT':
            return {
                ...state,
                text: ''
            }
        case 'SORT_BY_STATUS':
            return {
                ...state,
                sortBy: action.status
            }
        default:
            return state;
    }
};