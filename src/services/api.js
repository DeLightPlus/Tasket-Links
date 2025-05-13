import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1', // Replace with your backend URL
});

// Add a request interceptor to include the token in headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;