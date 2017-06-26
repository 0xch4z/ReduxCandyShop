import { combineReducers } from 'redux';

import cart from './CartReducer';
import items from './ItemsReducer';

export default combineReducers({
  cart,
  items
});
