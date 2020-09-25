// Orders reducer


const resMsgReducerDefaultState = {
    msg: ''
}

export default (state = resMsgReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_MSG':
            return {
                ...state,
                msg: action.payload
            };
        case 'CLEAR_MSG':
            return {
                ...state,
                msg: ''
            }
        default:
            return state;
    }
}