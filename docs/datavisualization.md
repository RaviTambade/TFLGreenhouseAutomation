For a greenhouse automation system, data visualization components help users understand and analyze data such as temperature, humidity, light levels, and other sensor readings. React components for data visualization often involve charts, graphs, and interactive elements that display real-time or historical data.

Here's how you can structure and implement these components:

### Component Breakdown

1. **DataVisualizationDashboard**: Main component that aggregates different visualizations.
2. **TemperatureChart**: Displays temperature data over time.
3. **HumidityChart**: Displays humidity levels over time.
4. **LightIntensityChart**: Shows light intensity variations.
5. **SensorDataTable**: Provides a tabular view of recent sensor data.
6. **AlertsChart**: Visualizes historical alerts and events.

### 1. DataVisualizationDashboard Component

The `DataVisualizationDashboard` component acts as the main container for all data visualization components.

```jsx
import React from 'react';
import TemperatureChart from './TemperatureChart';
import HumidityChart from './HumidityChart';
import LightIntensityChart from './LightIntensityChart';
import SensorDataTable from './SensorDataTable';
import AlertsChart from './AlertsChart';

const DataVisualizationDashboard = () => {
  return (
    <div className="data-visualization-dashboard">
      <h2>Data Visualization Dashboard</h2>
      <TemperatureChart />
      <HumidityChart />
      <LightIntensityChart />
      <SensorDataTable />
      <AlertsChart />
    </div>
  );
};

export default DataVisualizationDashboard;
```

### 2. TemperatureChart Component

The `TemperatureChart` component visualizes temperature data over time. You can use charting libraries like `Chart.js` or `Recharts`.

```jsx
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchTemperatureData } from '../api/dataService';

const TemperatureChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const tempData = await fetchTemperatureData();
      const labels = tempData.map(entry => entry.timestamp);
      const temperatures = tempData.map(entry => entry.value);

      setData({
        labels,
        datasets: [
          {
            label: 'Temperature (°C)',
            data: temperatures,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <div className="temperature-chart">
      <h3>Temperature Over Time</h3>
      <Line data={data} />
    </div>
  );
};

export default TemperatureChart;
```

### 3. HumidityChart Component

The `HumidityChart` component displays humidity levels over time.

```jsx
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchHumidityData } from '../api/dataService';

const HumidityChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const humidityData = await fetchHumidityData();
      const labels = humidityData.map(entry => entry.timestamp);
      const humidityLevels = humidityData.map(entry => entry.value);

      setData({
        labels,
        datasets: [
          {
            label: 'Humidity (%)',
            data: humidityLevels,
            borderColor: 'rgba(54,162,235,1)',
            backgroundColor: 'rgba(54,162,235,0.2)',
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <div className="humidity-chart">
      <h3>Humidity Levels Over Time</h3>
      <Line data={data} />
    </div>
  );
};

export default HumidityChart;
```

### 4. LightIntensityChart Component

The `LightIntensityChart` component visualizes light intensity variations.

```jsx
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchLightIntensityData } from '../api/dataService';

const LightIntensityChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const lightData = await fetchLightIntensityData();
      const labels = lightData.map(entry => entry.timestamp);
      const lightIntensities = lightData.map(entry => entry.value);

      setData({
        labels,
        datasets: [
          {
            label: 'Light Intensity (Lux)',
            data: lightIntensities,
            borderColor: 'rgba(255,159,64,1)',
            backgroundColor: 'rgba(255,159,64,0.2)',
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <div className="light-intensity-chart">
      <h3>Light Intensity Over Time</h3>
      <Line data={data} />
    </div>
  );
};

export default LightIntensityChart;
```

### 5. SensorDataTable Component

The `SensorDataTable` component provides a tabular view of recent sensor data.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchRecentSensorData } from '../api/dataService';

const SensorDataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sensorData = await fetchRecentSensorData();
      setData(sensorData);
    };

    fetchData();
  }, []);

  return (
    <div className="sensor-data-table">
      <h3>Recent Sensor Data</h3>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Sensor Type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.timestamp}</td>
              <td>{entry.sensorType}</td>
              <td>{entry.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SensorDataTable;
```

### 6. AlertsChart Component

The `AlertsChart` component visualizes historical alerts and events.

```jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { fetchAlertsData } from '../api/dataService';

const AlertsChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const alertsData = await fetchAlertsData();
      const labels = alertsData.map(entry => entry.alertType);
      const counts = alertsData.map(entry => entry.count);

      setData({
        labels,
        datasets: [
          {
            label: 'Number of Alerts',
            data: counts,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <div className="alerts-chart">
      <h3>Historical Alerts</h3>
      <Bar data={data} />
    </div>
  );
};

export default AlertsChart;
```

### API Integration

Here’s how you might implement the API service functions for fetching data:

```jsx
// src/api/dataService.js
export const fetchTemperatureData = async () => {
  const response = await fetch('/api/data/temperature');
  const data = await response.json();
  return data;
};

export const fetchHumidityData = async () => {
  const response = await fetch('/api/data/humidity');
  const data = await response.json();
  return data;
};

export const fetchLightIntensityData = async () => {
  const response = await fetch('/api/data/light-intensity');
  const data = await response.json();
  return data;
};

export const fetchRecentSensorData = async () => {
  const response = await fetch('/api/data/recent-sensor');
  const data = await response.json();
  return data;
};

export const fetchAlertsData = async () => {
  const response = await fetch('/api/data/alerts');
  const data = await response.json();
  return data;
};
```

### Styling

Apply CSS to style these components and make the visualizations clear and appealing. Ensure that the charts and tables are responsive and that the UI is user-friendly.

### Additional Features

1. **Real-time Updates**: Implement real-time updates using WebSockets or polling to keep data visualizations current.
2. **Interactivity**: Add interactive features like tooltips, zooming, and filtering to enhance user experience.
3. **Accessibility**: Ensure that charts and tables are accessible, providing alternative text and accessible navigation.

By implementing these components, you’ll provide users with powerful tools to visualize and analyze greenhouse data, helping them make informed decisions and manage their greenhouse more effectively.