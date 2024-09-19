// src/components/Dashboard.js
import React from 'react';
import TemperatureControl from './TemperatureControl';
import HumidityControl from './HumidityControl';
import LightingControl from './LightingControl';
import IrrigationControl from './IrrigationControl';

const Dashboard = () => {
  return (
    <div>
      <table>
        <tr> 
          <td> <TemperatureControl /></td>
          <td> <HumidityControl /></td>
        </tr>
        <tr>
          <td><LightingControl /></td>
          <td> <IrrigationControl /></td>
        </tr>
      </table>
    </div>
  );
};

export default Dashboard;
