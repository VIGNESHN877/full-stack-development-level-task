import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { 
  WiDaySunny, 
  WiRain, 
  WiCloudy, 
  WiSnow, 
  WiThunderstorm, 
  WiFog 
} from 'react-icons/wi';
import Grid from '@mui/material/Grid';


const getWeatherIcon = (condition) => {
  const style = { fontSize: '3rem' };
  switch (condition) {
    case 'Clear':
      return <WiDaySunny style={style} />;
    case 'Rain':
      return <WiRain style={style} />;
    case 'Clouds':
      return <WiCloudy style={style} />;
    case 'Snow':
      return <WiSnow style={style} />;
    case 'Thunderstorm':
      return <WiThunderstorm style={style} />;
    case 'Mist':
    case 'Fog':
    case 'Haze':
      return <WiFog style={style} />;
    default:
      return <WiDaySunny style={style} />;
  }
};


const CurrentWeather = ({ data }) => {
  if (!data) return null;

  const { name, main, weather, wind } = data;
  const weatherCondition = weather[0].main;

  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {weather[0].description}
        </Typography>
        
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {getWeatherIcon(weatherCondition)}
              <Typography variant="h3" component="div">
                {Math.round(main.temp)}°C
              </Typography>
            </div>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">
              Feels like: {Math.round(main.feels_like)}°C
            </Typography>
            <Typography variant="body2">
              Humidity: {main.humidity}%
            </Typography>
            <Typography variant="body2">
              Wind: {wind.speed} m/s
            </Typography>
            <Typography variant="body2">
              Pressure: {main.pressure} hPa
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;