// src/components/HumidityControl.js
import React, { useState, useEffect } from 'react';
import axios from '../../services/api';

const HumidityControl = () => {
  const [humidity, setHumidity] = useState(50); // Default humidity

  useEffect(() => {
    // Fetch the current humidity from your API
    const fetchHumidity = async () => {
      try {
        const response = await axios.get('/humidity');
        setHumidity(response.data.humidity);
      } catch (error) {
        console.error('Error fetching humidity data', error);
      }
    };

    fetchHumidity();
  }, []);

  const handleChange = async (event) => {
    const newHumidity = event.target.value;
    setHumidity(newHumidity);

    // Update the humidity via your API
    try {
     
    } catch (error) {
      console.error('Error updating humidity', error);
    }
  };

  return (
    <div>
      <h2>Humidity Control</h2>
      <input type="number" value={humidity} onChange={handleChange} />
      <p>Current Humidity: {humidity}%</p>
    </div>
  );
};

export default HumidityControl;
