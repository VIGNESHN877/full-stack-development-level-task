import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const SearchBar = ({ onCitySelect }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCities = async (query) => {
    if (!query || query.trim().length < 2) {
      return []; // Don't search for very short queries
    }

    try {
      const response = await axios.get(
        'https://weather-api167.p.rapidapi.com/api/weather/forecast?$=%2CGB&cnt=3&units=standard&type=three_hour&mode=json&lang=en' ,
        {
          params: {
            q: query,
            limit: 5,
            appid: `1e5215a3dcmshf7caf4b29e64bd8p1cf7d1jsna97f037f72d0`// Replace with your actual API key
          }
        }
      );
      
      // Format options from the direct geocoding API response
      const formattedCities = response.data.map(city => ({
        lat: city.lat,
        lon: city.lon,
        name: city.name,
        country: city.country,
        state: city.state || '',
        label: `${city.name}${city.state ? `, ${city.state}` : ''}, ${city.country}`
      }));

      return formattedCities;
    } catch (error) {
      console.error('Error fetching cities:', error);
      return [];
    }
  };

  useEffect(() => {
    let active = true;
    let timer;

    if (inputValue === '' || !open) {
      setOptions([]);
      return;
    }

    setLoading(true);
    
    timer = setTimeout(async () => {
      const cities = await fetchCities(inputValue);
      if (active) {
        setOptions(cities);
        setLoading(false);
      }
    }, 600);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [inputValue, open]);

  const handleSelection = (event, value) => {
    if (value) {
      onCitySelect(value.lat, value.lon, value.label);
    }
  };

  return (
    <Autocomplete
      sx={{ width: 300 }}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) => 
        option.lat === value.lat && option.lon === value.lon
      }
      getOptionLabel={(option) => option.label}
      options={options}
      loading={loading}
      noOptionsText={inputValue ? "No cities found" : "Type to search..."}
      onChange={handleSelection}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search city"
          variant="outlined"
          InputProp={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={`${option.lat}-${option.lon}`}>
          {option.label}
        </li>
      )}
    />
  );
};

export default SearchBar;