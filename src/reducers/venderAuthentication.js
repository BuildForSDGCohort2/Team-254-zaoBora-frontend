const vendorAuthenticationInitialState = {
  vendor: null,
  register: false,
  login: false
};

export default (state = vendorAuthenticationInitialState, action ) => {
  switch (action.type) {
    case 'VENDOR_REGISTER_SUCCESS':
        return {
          ...state,
          register: true
        }
    case 'VENDOR_REGISTER_FAILURE':
        return {
          ...state,
          register: false
        }
    case 'VENDOR_LOGIN_SUCCESS':
        return {
          ...state,
          login: true
        }
    case 'VENDOR_LOGIN_FAILURE':
        return {
          ...state,
          login: false
        }
    default:
        return state;
  }
}
