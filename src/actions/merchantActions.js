import { axiosInstance } from './index';
import {
  PAY_MERCHANT_SUBSCRIPTION_FEE_REQUEST,
  PAY_MERCHANT_SUBSCRIPTION_FEE_SUCCESSFUL,
  PAY_MERCHANT_SUBSCRIPTION_FEE_FAILED
} from '../constants/merchantConstants';
import { v4 as uuidv4 } from 'uuid';

export const MerchantSubscriptionPayment = () => async (dispatch, getState) => {
  console.log(
    'process.env.REACT_APP_SECRETKEY',
    process.env.REACT_APP_SECRETKEY
  );
  try {
    dispatch({
      type: PAY_MERCHANT_SUBSCRIPTION_FEE_REQUEST
    });
    const {
      userLogin: { userInfo }
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SECRETKEY}`
      },
      tx_ref: uuidv4(),
      amount: '20',
      currency: 'USD',
      redirect_url:
        'https://mernstore-frontend-git-main.bisidavi.vercel.app/merchant-approval-payment',
      payment_options: 'card',
      customer: {
        name: userInfo.name,
        email: userInfo.email
      }
    };

    const makePayment = await axiosInstance.post('/api/payment', config);

    dispatch({
      type: PAY_MERCHANT_SUBSCRIPTION_FEE_SUCCESSFUL,
      payload: makePayment
    });

    console.log('makePayment', makePayment);
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
