const authenticationInitialState = {
    first_name: "",
    last_name: "",
    username: "",
    phone_number: "",
    email: "",
    city: "",
    region: "",
    address: "",
    street_address: "",
    is_farmer: false,
    access_token: "",
    refresh_token: ""
}

export default (state = authenticationInitialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                ...action.payload
            };
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
