import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://mern-storebackend.herokuapp.com',
  headers: { 'Content-Type': 'application/json' }
});
export const axiosFlutterwaveInstance = axios.create({
  baseURL: 'https://api.flutterwave.com/v3',
  headers: {
        'Content-Type': 'application/json',
      }
});
