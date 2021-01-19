import { axiosInstance } from './index';
import {
  PAY_MERCHANT_SUBSCRIPTION_FEE_REQUEST,
  PAY_MERCHANT_SUBSCRIPTION_FEE_SUCCESSFUL,
  PAY_MERCHANT_SUBSCRIPTION_FEE_FAILED
} from '../constants/merchantConstants';

export const MerchantSubscriptionPayment = (
  cardNumber,
  cvv,
  expiryMonth,
  expiryYear,
  currency,
  amount,
  email,
  fullname,
  phoneNumber
) => async dispatch => {
  console.log(
    'process.env.REACT_APP_SECRETKEY',
    process.env.REACT_APP_SECRETKEY
  );
  try {
    dispatch({
      type: PAY_MERCHANT_SUBSCRIPTION_FEE_REQUEST
    });

    const { data } = await axiosInstance.post(
      '/api/merchant/payments/card',
      {
        cardNumber,
        cvv,
        expiryMonth,
        expiryYear,
        currency,
        amount,
        email,
        fullname,
        phoneNumber
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_SECRETKEY}`,
          'Access-Control-Allow-Origin': '*'
        }
      }
    );

    dispatch({
      type: PAY_MERCHANT_SUBSCRIPTION_FEE_SUCCESSFUL,
      payload: data
    });

    console.log('data', data);
  } catch (error) {
    dispatch({
      type: PAY_MERCHANT_SUBSCRIPTION_FEE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
