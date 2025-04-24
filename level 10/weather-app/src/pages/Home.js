import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Weather website and enjoy accurate forecasts
      </Typography>
      <Typography variant="body1" gutterBottom>
        Get current weather and forecasts for your favorite locations
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" component={Link} to="/login" sx={{ mr: 2 }}>
          Login
        </Button>
        <Button variant="outlined" component={Link} to="/register">
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Home;