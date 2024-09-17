// src/components/IrrigationControl.js
import React, { useState, useEffect } from 'react';
import axios from '../../services/api';

const IrrigationControl = () => {
  const [irrigationStatus, setIrrigationStatus] = useState(false); // Default irrigation status

  useEffect(() => {
    // Fetch the current irrigation status from your API
    const fetchIrrigationStatus = async () => {
      try {
        const response = await axios.get('/irrigation');
        setIrrigationStatus(response.data.irrigationStatus);
      } catch (error) {
        console.error('Error fetching irrigation status', error);
      }
    };

    fetchIrrigationStatus();
  }, []);

  const handleToggle = async () => {
    const newStatus = !irrigationStatus;
    setIrrigationStatus(newStatus);

    // Update the irrigation status via your API
    try {
      await axios.post('/irrigation', { irrigationStatus: newStatus });
    } catch (error) {
      console.error('Error updating irrigation status', error);
    }
  };

  return (
    <div>
      <h2>Irrigation Control</h2>
      <button onClick={handleToggle}>
        {irrigationStatus ? 'Turn Off' : 'Turn On'}
      </button>
      <p>Irrigation is currently {irrigationStatus ? 'On' : 'Off'}</p>
    </div>
  );
};

export default IrrigationControl;
