// LocationDisplay.js
import React from 'react';
import useGeolocation from './useGeolocation';

function LocationDisplay() {
  const { location, error } = useGeolocation();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>📍 Your Location</h2>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : location.latitude && location.longitude ? (
        <div>
          <p><strong>Latitude:</strong> {location.latitude}</p>
          <p><strong>Longitude:</strong> {location.longitude}</p>
        </div>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}

export default LocationDisplay;
