// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/',  // adjust to your backend
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: add a request interceptor to include JWT automatically
api.interceptors.request.use(config => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
