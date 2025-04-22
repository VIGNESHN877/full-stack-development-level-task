// axiosInstance.js
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Example base URL
});

// Request Interceptor: Add Authorization Header to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle responses and errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response.data); // Log response data globally
    return response;
  },
  (error) => {
    if (error.response) {
      // Handle HTTP error codes
      switch (error.response.status) {
        case 401:
          console.error('Unauthorized access - 401');
          break;
        case 404:
          console.error('Resource not found - 404');
          break;
        case 500:
          console.error('Server error - 500');
          break;
        default:
          console.error('Unexpected error occurred');
      }
    } else {
      console.error('Network error or no response');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
