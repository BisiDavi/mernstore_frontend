import { axiosInstance } from './index';
import {
  MERCHANT_DETAILS_FAIL,
  MERCHANT_DETAILS_REQUEST,
  MERCHANT_DETAILS_SUCCESS,
  MERCHANT_LOGIN_FAIL,
  MERCHANT_LOGIN_REQUEST,
  MERCHANT_LOGIN_SUCCESS,
  MERCHANT_LOGOUT,
  MERCHANT_REGISTER_FAIL,
  MERCHANT_REGISTER_REQUEST,
  MERCHANT_REGISTER_SUCCESS,
  MERCHANT_UPDATE_PROFILE_FAIL,
  MERCHANT_UPDATE_PROFILE_REQUEST,
  MERCHANT_UPDATE_PROFILE_SUCCESS,
  MERCHANT_DETAILS_RESET,
  MERCHANT_LIST_FAIL,
  MERCHANT_LIST_SUCCESS,
  MERCHANT_LIST_REQUEST,
  MERCHANT_LIST_RESET,
  MERCHANT_DELETE_REQUEST,
  MERCHANT_DELETE_SUCCESS,
  MERCHANT_DELETE_FAIL,
  MERCHANT_UPDATE_FAIL,
  MERCHANT_UPDATE_SUCCESS,
  MERCHANT_UPDATE_REQUEST,
} from '../constants/merchantConstants';
import { ORDER_LIST_MY_RESET } from '../constants/orderConstants';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({
      type: MERCHANT_LOGIN_REQUEST
    });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const { data } = await axiosInstance.post(
      '/api/merchant/login',
      { email, password },
      config
    );

    dispatch({
      type: MERCHANT_LOGIN_SUCCESS,
      payload: data
    });

    localStorage.setItem('merchantInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: MERCHANT_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const logoutMerchant = () => dispatch => {
  localStorage.removeItem('merchantInfo');
  dispatch({ type: MERCHANT_LOGOUT });
  dispatch({ type: MERCHANT_DETAILS_RESET });
  dispatch({ type: ORDER_LIST_MY_RESET });
  dispatch({ type: MERCHANT_LIST_RESET });
};

export const register = (
  name,
  email,
  businessName,
  businessAddress,
  password
) => async dispatch => {
  try {
    dispatch({
      type: MERCHANT_REGISTER_REQUEST
    });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const { data } = await axiosInstance.post(
      '/api/merchant',
      { name, email, businessName, businessAddress, password },
      config
    );

    dispatch({
      type: MERCHANT_REGISTER_SUCCESS,
      payload: data
    });

    dispatch({
      type: MERCHANT_LOGIN_SUCCESS,
      payload: data
    });

    localStorage.setItem('merchantInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: MERCHANT_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const getMerchantDetails = id => async (dispatch, getState) => {
  try {
    dispatch({
      type: MERCHANT_DETAILS_REQUEST
    });

    const {
      merchantLogin: { merchantInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${merchantInfo.token}`
      }
    };

    const { data } = await axiosInstance.get(`/api/users/${id}`, config);

    dispatch({
      type: MERCHANT_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: MERCHANT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateUserProfile = user => async (dispatch, getState) => {
  try {
    dispatch({
      type: MERCHANT_UPDATE_PROFILE_REQUEST
    });

    const {
      merchantLogin: { merchantInfo }
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${merchantInfo.token}`
      }
    };

    const { data } = await axiosInstance.put(
      `/api/users/profile`,
      user,
      config
    );

    dispatch({
      type: MERCHANT_UPDATE_PROFILE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: MERCHANT_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MERCHANT_LIST_REQUEST
    });

    const {
      merchantLogin: { merchantInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${merchantInfo.token}`
      }
    };

    const { data } = await axiosInstance.get(`/api/users`, config);

    dispatch({
      type: MERCHANT_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: MERCHANT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const deleteUser = id => async (dispatch, getState) => {
  try {
    dispatch({
      type: MERCHANT_DELETE_REQUEST
    });

    const {
      merchantLogin: { merchantInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${merchantInfo.token}`
      }
    };

    await axiosInstance.delete(`/api/users/${id}`, config);

    dispatch({ type: MERCHANT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: MERCHANT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateUser = user => async (dispatch, getState) => {
  try {
    dispatch({
      type: MERCHANT_UPDATE_REQUEST
    });

    const {
      merchantLogin: { merchantInfo }
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${merchantInfo.token}`
      }
    };

    const { data } = await axiosInstance.put(
      `/api/users/${user._id}`,
      user,
      config
    );

    dispatch({ type: MERCHANT_UPDATE_SUCCESS });

    dispatch({ type: MERCHANT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MERCHANT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

