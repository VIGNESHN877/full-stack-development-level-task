import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  const style = { fontSize: '2rem' };
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

const formatDay = (dt) => {
  const date = new Date(dt * 1000);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

const DailyForecast = ({ day }) => {
  const [expanded, setExpanded] = useState(false);

  if (!day) return null;

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <Typography>{formatDay(day.dt)}</Typography>
          </Grid>
          <Grid item xs={3}>
            {getWeatherIcon(day.weather[0].main)}
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Humidity: {day.humidity}%
        </Typography>
        <Typography>
          Wind: {day.wind_speed} m/s
        </Typography>
        <Typography>
          Pressure: {day.pressure} hPa
        </Typography>
        <Typography>
          Description: {day.weather[0].description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default DailyForecast;