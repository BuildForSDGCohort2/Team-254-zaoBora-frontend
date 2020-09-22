// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SET_TEXT_FILTER
export const setOrderTextFilter = (text = '') => ({
    type: 'SET_ORDER_TEXT_FILTER',
    text
});

// SORT_BY_PRICE
export const sortByStatus = (status) => ({
    type: 'SORT_BY_STATUS',
    status
});

// ON_FOCUS
export const focusResults = () => ({
    type: 'FOCUS_RESULTS'
});

// ON_BLUR
export const blurResults = () => ({
    type: 'BLUR_RESULTS'
});

// ON_CLICK_RESULT
export const clickResult = () => ({
	type: 'CLICK_RESULT'
})

// HIDE_RESULT
export const hideResult = () => ({
	type: 'HIDE_RESULT'
})