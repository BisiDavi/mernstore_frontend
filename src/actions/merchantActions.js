import { axiosInstance, raveInstance } from './index';
import {
  PAY_MERCHANT_SUBSCRIPTION_FEE_REQUEST,
  PAY_MERCHANT_SUBSCRIPTION_FEE_SUCCESSFUL,
  PAY_MERCHANT_SUBSCRIPTION_FEE_FAILED
} from '../constants/merchantConstants';
import { v4 as uuidv4 } from 'uuid';

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

export const merchantPayment = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PAY_MERCHANT_SUBSCRIPTION_FEE_REQUEST
    });
    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      tx_ref: uuidv4(),
      amount: '20',
      currency: 'USD',
      redirect_url:
        'https://mernstore-frontend-git-main.bisidavi.vercel.app/merchant-approval-payment-made',
      payment_options: 'card',
      customer: {
        name: userInfo.name,
        email: userInfo.email,
        phonenumber: userInfo.phonenumber
      }
    };
    const makePayment = await raveInstance.post('/payments', config, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SECRETKEY}`,
        'Content-Type': 'application/json'
      }
    });

    dispatch({
      type: PAY_MERCHANT_SUBSCRIPTION_FEE_SUCCESSFUL,
      payload: makePayment
    });
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
