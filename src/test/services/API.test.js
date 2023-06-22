import axios from 'axios';

const API = axios.create({
  headers: {
    Accept: '*/*', // Required for CORS support to work
  },
}); // Create a new Axios instance

export default API;
