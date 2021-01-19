import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://mern-storebackend.herokuapp.com'
});
export const raveInstance = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://api.flutterwave.com/v3'
});