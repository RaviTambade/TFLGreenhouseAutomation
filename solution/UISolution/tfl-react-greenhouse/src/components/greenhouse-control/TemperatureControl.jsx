// src/components/TemperatureControl.js
import React, { useState, useEffect } from 'react';
import axios from '../../services/api';

const TemperatureControl = () => {
  const [temperature, setTemperature] = useState(20); // Default temperature

  useEffect(() => {
    // Fetch the current temperature from your API
    const fetchTemperature = async () => {
      try {
        const response = await axios.get('/temperature');
        setTemperature(response.data.temperature);
      } catch (error) {
        console.error('Error fetching temperature data', error);
      }
    };

    fetchTemperature();
  }, []);

  const handleChange = async (event) => {
    const newTemperature = event.target.value;
    setTemperature(newTemperature);

    // Update the temperature via your API
    try {
      await axios.post('/temperature', { temperature: newTemperature });
    } catch (error) {
      console.error('Error updating temperature', error);
    }
  };

  return (
    <div>
      <h2>Temperature Control</h2>
      <input type="number" value={temperature} onChange={handleChange} />
      <p>Current Temperature: {temperature}°C</p>
    </div>
  );
};

export default TemperatureControl;
