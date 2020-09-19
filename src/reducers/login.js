const initialState = {
  login: false,
  user: null
}

export default ( state = initialState, action ) => {
  switch(action.type){
    case 'LOGIN_SUCCESS':
        return {
          login: true,
          user: action.payload
        };
    case 'LOGIN_FAILURE':
        return {
          ...state,
          login: false
        }
    default:
        return state;
  }
}
