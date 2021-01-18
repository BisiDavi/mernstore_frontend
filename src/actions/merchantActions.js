import { axiosFlutterwaveInstance } from './index';
import {
  PAY_MERCHANT_SUBSCRIPTION_FEE_REQUEST,
  PAY_MERCHANT_SUBSCRIPTION_FEE_SUCCESSFUL,
  PAY_MERCHANT_SUBSCRIPTION_FEE_FAILED
} from '../constants/merchantConstants';

export const MerchantSubscriptionPayment = async (dispatch, getState) => {
  try {
    dispatch({
      type: PAY_MERCHANT_SUBSCRIPTION_FEE_REQUEST
    });
    const {
      userLogin: { userInfo }
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      },
      tx_ref: '1',
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

    const makePayment = await axiosFlutterwaveInstance.post(
      '/payments',
      config
    );

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
