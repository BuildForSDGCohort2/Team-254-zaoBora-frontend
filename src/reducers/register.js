const initialState = {
  register: false,
  user: null
}

export default ( state = initialState, action ) => {
  switch(action.type){
    case 'REGISTER_REQUEST':
        return {
          register: true,
          user: action.payload
        };
    case 'REGISTER_SUCCESS':
        return {
          ...state,
          register : true,
        }
    case 'REGISTER_FAILURE':
        return {
          ...state,
          register: false
        }
    default:
        return state;
  }
}
