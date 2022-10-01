import { CART_SAVE_PAYMENT_METHOD } from "../constants/paymentConstants";

export const paymentMethodReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
