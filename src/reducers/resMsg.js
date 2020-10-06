// Orders reducer


const resMsgReducerDefaultState = {
    msg: '',
    type: '' // error | success | info
}

export default (state = resMsgReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_MSG':
            return {
                msg: action.payload.msg,
                type: action.payload.type
            }
        case 'CLEAR_MSG':
            return {
                msg: '',
                type: ''
            }
        default:
            return state;
    }
}