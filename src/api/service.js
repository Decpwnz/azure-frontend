import axios from 'axios';

// let API_ENDPOINT;

// if (import.meta.env.VITE_API_ENDPOINT !== undefined) {
//   // Vite environment
//   API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
// } else if (process.env.VITE_API_ENDPOINT !== undefined) {
//   // Non-Vite environment
//   API_ENDPOINT = process.env.VITE_API_ENDPOINT;
// } else {
//   // Default value if neither variable is defined
//   API_ENDPOINT = 'ec2-16-171-25-86.eu-north-1.compute.amazonaws.com:3001';
// }

// const API_ENDPOINT = 'http://ec2-13-49-65-110.eu-north-1.compute.amazonaws.com:3001';

const API_ENDPOINT = import.meta.env.VITE_API_URL || 'http://ec2-13-49-65-110.eu-north-1.compute.amazonaws.com:3001';


const api = axios.create({
  baseURL: API_ENDPOINT,
});

export default api;
