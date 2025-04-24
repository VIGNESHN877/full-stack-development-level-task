import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import WeatherPage from './pages/WeatherPage';
import ProtectedRoute from './components/ProtectedRoute';
import Box from '@mui/material/Box';


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Box sx={{ p: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/weather"
              element={
                <ProtectedRoute>
                  <WeatherPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Box>
      </AuthProvider>
    </Router>
  );
};


export default App;