import {
  MERCHANT_DETAILS_FAIL,
  MERCHANT_DETAILS_REQUEST,
  MERCHANT_DETAILS_RESET,
  MERCHANT_DETAILS_SUCCESS,
  MERCHANT_LIST_REQUEST,
  MERCHANT_LIST_SUCCESS,
  MERCHANT_LIST_FAIL,
  MERCHANT_LIST_RESET,
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
  MERCHANT_DELETE_REQUEST,
  MERCHANT_DELETE_SUCCESS,
  MERCHANT_DELETE_FAIL,
  MERCHANT_UPDATE_RESET,
  MERCHANT_UPDATE_REQUEST,
  MERCHANT_UPDATE_SUCCESS,
  MERCHANT_UPDATE_FAIL,
} from '../constants/merchantConstants'

export const merchantLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case MERCHANT_LOGIN_REQUEST:
      return { loading: true }
    case MERCHANT_LOGIN_SUCCESS:
      return { loading: false, merchantInfo: action.payload }
    case MERCHANT_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case MERCHANT_LOGOUT:
      return {}
    default:
      return state
  }
}

export const merchantRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case MERCHANT_REGISTER_REQUEST:
      return { loading: true }
    case MERCHANT_REGISTER_SUCCESS:
      return { loading: false, merchantInfo: action.payload }
    case MERCHANT_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const merchantDetailsReducer = (state = { merchant: {} }, action) => {
  switch (action.type) {
    case MERCHANT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case MERCHANT_DETAILS_SUCCESS:
      return { loading: false, merchant: action.payload }
    case MERCHANT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case MERCHANT_DETAILS_RESET:
      return { merchant: {} }
    default:
      return state
  }
}

export const merchantUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case MERCHANT_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case MERCHANT_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, merchantInfo: action.payload }
    case MERCHANT_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const merchantListReducer = (state = { merchants: [] }, action) => {
  switch (action.type) {
    case MERCHANT_LIST_REQUEST:
      return { loading: true }
    case MERCHANT_LIST_SUCCESS:
      return { loading: false, merchants: action.payload }
    case MERCHANT_LIST_FAIL:
      return { loading: false, error: action.payload }
    case MERCHANT_LIST_RESET:
      return { merchants: [] }
    default:
      return state
  }
}

export const merchantDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MERCHANT_DELETE_REQUEST:
      return { loading: true }
    case MERCHANT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case MERCHANT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const merchantUpdateReducer = (state = { merchant: {} }, action) => {
  switch (action.type) {
    case MERCHANT_UPDATE_REQUEST:
      return { loading: true }
    case MERCHANT_UPDATE_SUCCESS:
      return { loading: false, success: true }
    case MERCHANT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case MERCHANT_UPDATE_RESET:
      return {
        merchant: {},
      }
    default:
      return state
  }
}
