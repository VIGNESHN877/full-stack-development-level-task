import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);

  // Replace with your actual API key
  const API_KEY = '0e6abc0f76de26a352390dc22725b42d';

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching weather:', error);
      throw error;
    }
  };

  const fetchForecast = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching forecast:', error);
      throw error;
    }
  };

  const handleCitySelect = useCallback(async (lat, lon, cityName) => {
    if (selectedCity && selectedCity.lat === lat && selectedCity.lon === lon) {
      return;
    }

    setLoading(true);
    setError('');
    setSelectedCity({ lat, lon, name: cityName });
    
    try {
      const [weather, forecast] = await Promise.all([
        fetchWeather(lat, lon),
        fetchForecast(lat, lon)
      ]);
      
      if (weather) {
        weather.name = cityName.split(',')[0];
        setWeatherData(weather);
      }
      
      if (forecast) {
        setForecastData(forecast);
      }
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, [selectedCity]);

  // Load default city weather on initial render
  useEffect(() => {
    // Default to London coordinates
    // handleCitySelect(11.6538, 78.1554, 'SALEM, GB');
    handleCitySelect(11.0055, 76.9661, 'COIMBATORE, GB');
  }, [handleCitySelect]);

  

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Box sx={{ mb: 3 }}>
        <SearchBar onCitySelect={handleCitySelect} />
      </Box>
      
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography 
          color="error" 
          sx={{ 
            mt: 2, 
            p: 2, 
            backgroundColor: 'error.light', 
            borderRadius: 1 
          }}
        >
          {error}
        </Typography>
      ) : (
        <>
          {weatherData && <CurrentWeather data={weatherData} />}
          {forecastData && <Forecast data={forecastData} />}
        </>
      )}
    </Container>
  );
};


export default WeatherPage;