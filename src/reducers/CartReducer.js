import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from '../constants/ActionTypes';

const initialState = {
  quantity: 0
};

export default (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT_QUANTITY:
      return {...state, quantity: (state.quantity + 1)};
    case DECREMENT_QUANTITY:
      return {...state, quantity: (state.quantity - 1)};
    default:
      return state;
  }
}
