// Response messages reducer

const resMsgReducerDefaultState = {
    registerFailMsg: '',
    registerSuccessMsg: '',
    loginFailMsg: '',
    loginSuccessMsg: '',
    logoutSuccessMsg: '',
    logoutFailMsg: ''
}

export default (state = resMsgReducerDefaultState, action) => {
    switch (action.type) {
        case 'REGISTER_FAIL_MSG':
            return {
                ...state,
                registerFailMsg: action.payload
            }
        case 'REGISTER_SUCCESS_MSG':
            return {
                ...state,
                registerSuccessMsg: action.payload
            }
        case 'LOGIN_FAIL_MSG':
            return {
                ...state,
                loginFailMsg: action.payload
            }
        case 'LOGIN_SUCCESS_MSG':
            return {
                ...state,
                loginSuccessMsg: action.payload
            }
        case 'LOGOUT_SUCCESS_MSG':
            return {
                ...state,
                logoutSuccessMsg: action.payload
            }
        case 'LOGOUT_FAIL_MSG':
            return {
                ...state,
                logoutFailMsg: action.payload
            }
        case 'CLEAR_MSG':
            return {
                registerFailMsg: '',
                registerSuccessMsg: '',
                loginFailMsg: '',
                loginSuccessMsg: '',
                logoutSuccessMsg: '',
                logoutFailMsg: ''
            }
        default:
            return state;
    }
}