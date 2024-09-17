// src/components/LightingControl.js
import React, { useState, useEffect } from 'react';
import axios from '../../services/api';

const LightingControl = () => {
  const [lightStatus, setLightStatus] = useState(false); // Default light status

  useEffect(() => {
    // Fetch the current light status from your API
    const fetchLightStatus = async () => {
      try {
        const response = await axios.get('/lighting');
        setLightStatus(response.data.lightStatus);
      } catch (error) {
        console.error('Error fetching light status', error);
      }
    };

    fetchLightStatus();
  }, []);

  const handleToggle = async () => {
    const newStatus = !lightStatus;
    setLightStatus(newStatus);

    // Update the light status via your API
    try {
      await axios.post('/lighting', { lightStatus: newStatus });
    } catch (error) {
      console.error('Error updating light status', error);
    }
  };

  return (
    <div>
      <h2>Lighting Control</h2>
      <button onClick={handleToggle}>
        {lightStatus ? 'Turn Off' : 'Turn On'}
      </button>
      <p>Light is currently {lightStatus ? 'On' : 'Off'}</p>
    </div>
  );
};

export default LightingControl;
