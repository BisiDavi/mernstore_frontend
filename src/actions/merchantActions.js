import { axiosInstance, raveInstance } from './index';
import {
  PAY_MERCHANT_SUBSCRIPTION_FEE_REQUEST,
  PAY_MERCHANT_SUBSCRIPTION_FEE_SUCCESSFUL,
  PAY_MERCHANT_SUBSCRIPTION_FEE_FAILED,
  RAVE_CONNECTION_REQUEST_FAILED,
  RAVE_CONNECTION_REQUEST,
  RAVE_CONNECTION_SUCCESSFUL
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
      type: RAVE_CONNECTION_REQUEST
    });
    const {
      userLogin: { userInfo }
      // merchantPayment: { paymentLink }
    } = getState();

    const config = {
      tx_ref: uuidv4(),
      amount: '20',
      currency: 'USD',
      redirect_url:
        'https://mernstore-frontend-git-main.bisidavi.vercel.app/merchant',
      payment_options: 'card',
      customer: {
        name: userInfo.name,
        email: userInfo.email
      }
    };

    const connectionSuccessful = data =>
      dispatch({
        type: RAVE_CONNECTION_SUCCESSFUL,
        payload: data
      });

    const loadLink = resultData => {
      const { data } = resultData.payload;
      const { link } = data;
      console.log('loadink', link);
      window.location.href = link;
    };

    const connectionFailed = error => {
      return dispatch({
        type: RAVE_CONNECTION_REQUEST_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    };

    raveInstance
      .post('/payments', config, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_SECRETKEY}`,
          'Content-Type': 'application/json'
        }
      })
      .then(res => connectionSuccessful(res.data))
      .then(result => loadLink(result))
      .catch(err => connectionFailed(err));
  } catch (error) {
    dispatch({
      type: RAVE_CONNECTION_REQUEST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
