// App.jsx
import React, { useState } from 'react';
import DataFetcher from './DataFetcher';
import axiosInstance from './axiosInstance';

function App() {
  const [loading, setLoading] = useState(false);

  // Listen for global loading state updates (set by Axios interceptors)
  axiosInstance.interceptors.request.use(
    (config) => {
      setLoading(true);
      return config;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  return (
    <div className="App">
      <h1>Axios with Interceptors Example</h1>
      {loading && <div>Loading...</div>}
      <DataFetcher />
    </div>
  );
}

export default App;
