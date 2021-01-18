import {
  PAY_MERCHANT_SUBSCRIPTION_FEE_REQUEST,
  PAY_MERCHANT_SUBSCRIPTION_FEE_SUCCESSFUL,
  PAY_MERCHANT_SUBSCRIPTION_FEE_FAILED
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
