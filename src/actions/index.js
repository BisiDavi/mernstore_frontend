import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://mern-storebackend.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});
export const raveInstance = axios.create({
  baseURL: 'https://api.flutterwave.com/v3/payments'
});
