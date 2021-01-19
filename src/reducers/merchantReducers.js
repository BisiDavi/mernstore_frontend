import {
  PAY_MERCHANT_SUBSCRIPTION_FEE_REQUEST,
  PAY_MERCHANT_SUBSCRIPTION_FEE_SUCCESSFUL,
  RAVE_CONNECTION_SUCCESSFUL,
  PAY_MERCHANT_SUBSCRIPTION_FEE_FAILED,
  RAVE_CONNECTION_REQUEST,
  RAVE_CONNECTION_REQUEST_FAILED,
} from '../constants/merchantConstants';

export const merchantSubscriptionReducer = (state = {}, action) => {
  switch (action.type) {
    case PAY_MERCHANT_SUBSCRIPTION_FEE_REQUEST:
      return { loading: true };
    case PAY_MERCHANT_SUBSCRIPTION_FEE_SUCCESSFUL:
      return { loading: false, merchantPayment: action.payload };
    case PAY_MERCHANT_SUBSCRIPTION_FEE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const merchantPaymentReducer = (state = { paymentLink: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case RAVE_CONNECTION_REQUEST:
      return { loading: true };
    case RAVE_CONNECTION_SUCCESSFUL:
      return { loading: false };    
    case RAVE_CONNECTION_REQUEST_FAILED:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
