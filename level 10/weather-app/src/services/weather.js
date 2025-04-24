import axios from 'axios';


const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.REACT_APP_RAPIDAPI_HOST;

export const fetchCities = async (query) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather?q=coimbatore&appid=0e6abc0f76de26a352390dc22725b42d&units=metric',
      params: {
        limit: '5',
        namePrefix: query
      },
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST
      }
    };

    const response = await axios.request(options);
    return response.data.data.map(city => ({
      value: `${city.latitude} ${city.longitude}`,
      label: `${city.name}, ${city.countryCode}`
    }));
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};

export const fetchWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

export const fetchForecast = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://my-server.tld/v1/forecast?latitude=11.0055&longitude=76.9661&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,rain,showers,snowfall,weather_code`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};