const authenticationInitialState = {
    user: null,
    authenticated: false,
    access_token: "",
    refresh_token: ""
}

export default (state = authenticationInitialState, action) => {
    switch (action.type) {
        case 'CHECK_AUTH_STATE':
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
