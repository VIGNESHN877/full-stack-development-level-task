import React from 'react';
import DailyForecast from './DailyForecast';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Forecast = ({ data }) => {
  if (!data || !data.list) return null;

  // Group forecasts by day
  const dailyForecasts = {};
  data.list.forEach(item => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!dailyForecasts[date]) {
      dailyForecasts[date] = {
        dt: item.dt,
        temp: {
          max: item.main.temp_max,
          min: item.main.temp_min
        },
        weather: item.weather,
        humidity: item.main.humidity,
        wind_speed: item.wind.speed,
        pressure: item.main.pressure
      };
    } else {
      // Update max and min temps
      if (item.main.temp_max > dailyForecasts[date].temp.max) {
        dailyForecasts[date].temp.max = item.main.temp_max;
      }
      if (item.main.temp_min < dailyForecasts[date].temp.min) {
        dailyForecasts[date].temp.min = item.main.temp_min;
      }
    }
  });

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          7-Day Forecast
        </Typography>
        {Object.values(dailyForecasts).map((day, index) => (
          <DailyForecast key={index} day={day} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Forecast;