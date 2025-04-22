// useGeolocation.js
import { useState, useEffect } from 'react';

function useGeolocation() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const success = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const fail = (err) => {
      setError(err.message);
    };

    navigator.geolocation.getCurrentPosition(success, fail);
  }, []);

  return { location, error };
}

export default useGeolocation;
