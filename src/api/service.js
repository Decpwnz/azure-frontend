import axios from 'axios';

// const API_ENDPOINT = 'http://ec2-16-171-149-20.eu-north-1.compute.amazonaws.com:3001';
// const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
const API_ENDPOINT = import.meta.env.VITE_ABOBA_API;

const api = axios.create({
  baseURL: API_ENDPOINT,
});

export default api;
