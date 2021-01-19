import {
  PAY_MERCHANT_SUBSCRIPTION_FEE_REQUEST,
  PAY_MERCHANT_SUBSCRIPTION_FEE_SUCCESSFUL,
  RAVE_CONNECTION_SUCCESSFUL,
  PAY_MERCHANT_SUBSCRIPTION_FEE_FAILED,
  RAVE_CONNECTION_REQUEST,
  RAVE_CONNECTION_REQUEST_FAILED
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
export const merchantPaymentReducer = (state = { paymentLink: [] }, action) => {
  switch (action.type) {
    case RAVE_CONNECTION_REQUEST:
      return { loading: true};
    case RAVE_CONNECTION_SUCCESSFUL:
      const {payload} = action
      return { loading: false, paymentLink: payload[0].data };
    case RAVE_CONNECTION_REQUEST_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
