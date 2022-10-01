import { CART_SAVE_SHIPPING_ADDRESS } from "../constants/shippingAddressConstants";

export const shippingAddressReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippigAddress: action.payload,
      };
    default:
      return state;
  }
};
