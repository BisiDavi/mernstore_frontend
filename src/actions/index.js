import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://mern-storebackend.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});
