import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actions/types'

const initialState = {
  register: false
}

const Registration = ( state = initialState, action ) => ({
  switch(action.type){
    case REGISTER_REQUEST:
        console.log(action)
        return { register: true };
    case REGISTER_SUCCESS;
        return {
          ...state,
          register : true,
        }
    case REGISTER_FAILURE;
        return {
          ...state,
          register: false
        }
      default:
        return state;
      break;
  }
})
