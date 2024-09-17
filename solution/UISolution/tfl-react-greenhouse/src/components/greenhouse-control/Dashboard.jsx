// src/components/Dashboard.js
import React from 'react';
import TemperatureControl from './TemperatureControl';
import HumidityControl from './HumidityControl';
import LightingControl from './LightingControl';
import IrrigationControl from './IrrigationControl';

const Dashboard = () => {
  return (
    <div>
      <TemperatureControl />
      <HumidityControl />
      <LightingControl />
      <IrrigationControl />
    </div>
  );
};

export default Dashboard;
