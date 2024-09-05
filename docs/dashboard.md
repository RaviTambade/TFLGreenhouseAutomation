For a React-based greenhouse automation dashboard, you'll want to create a set of components that collectively provide an overview and control of the greenhouse environment. Here's a structured approach to building these components:

### 1. Dashboard Component

The `Dashboard` component will serve as the main container for all other components. It will include sections for an overview, temperature controls, humidity settings, lighting control, and more.

```jsx
import React from 'react';
import Overview from './Overview';
import TemperatureControl from './TemperatureControl';
import HumidityControl from './HumidityControl';
import LightingControl from './LightingControl';
import Alerts from './Alerts';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Overview />
      <TemperatureControl />
      <HumidityControl />
      <LightingControl />
      <Alerts />
    </div>
  );
};

export default Dashboard;
```

### 2. Overview Component

The `Overview` component displays key metrics and statuses at a glance.

```jsx
import React, { useEffect, useState } from 'react';
import { fetchOverviewData } from '../api/overviewService';

const Overview = () => {
  const [data, setData] = useState({ temperature: 0, humidity: 0, lightLevel: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const overviewData = await fetchOverviewData();
      setData(overviewData);
    };

    fetchData();
  }, []);

  return (
    <div className="overview">
      <h2>Overview</h2>
      <div className="metrics">
        <div className="metric">Temperature: {data.temperature} °C</div>
        <div className="metric">Humidity: {data.humidity} %</div>
        <div className="metric">Light Level: {data.lightLevel} lx</div>
      </div>
    </div>
  );
};

export default Overview;
```

### 3. TemperatureControl Component

The `TemperatureControl` component allows users to set and monitor temperature settings.

```jsx
import React, { useState, useEffect } from 'react';
import TemperatureSlider from './TemperatureSlider';
import { fetchTemperature, updateTemperature } from '../api/temperatureService';

const TemperatureControl = () => {
  const [currentTemperature, setCurrentTemperature] = useState(0);
  const [targetTemperature, setTargetTemperature] = useState(20); // Default target

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTemperature();
      setCurrentTemperature(data.currentTemperature);
      setTargetTemperature(data.targetTemperature);
    };

    fetchData();
  }, []);

  const handleTemperatureChange = async (newTemperature) => {
    setTargetTemperature(newTemperature);
    await updateTemperature(newTemperature);
  };

  return (
    <div className="temperature-control">
      <h2>Temperature Control</h2>
      <div>Current Temperature: {currentTemperature} °C</div>
      <TemperatureSlider
        value={targetTemperature}
        onChange={handleTemperatureChange}
      />
    </div>
  );
};

export default TemperatureControl;
```

### 4. HumidityControl Component

The `HumidityControl` component allows users to monitor and adjust humidity levels.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchHumidity, updateHumidity } from '../api/humidityService';

const HumidityControl = () => {
  const [currentHumidity, setCurrentHumidity] = useState(0);
  const [targetHumidity, setTargetHumidity] = useState(50); // Default target

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHumidity();
      setCurrentHumidity(data.currentHumidity);
      setTargetHumidity(data.targetHumidity);
    };

    fetchData();
  }, []);

  const handleHumidityChange = async (newHumidity) => {
    setTargetHumidity(newHumidity);
    await updateHumidity(newHumidity);
  };

  return (
    <div className="humidity-control">
      <h2>Humidity Control</h2>
      <div>Current Humidity: {currentHumidity} %</div>
      <input
        type="range"
        min="0"
        max="100"
        value={targetHumidity}
        onChange={(e) => handleHumidityChange(Number(e.target.value))}
      />
      <p>Target Humidity: {targetHumidity} %</p>
    </div>
  );
};

export default HumidityControl;
```

### 5. LightingControl Component

The `LightingControl` component allows users to adjust lighting settings.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchLighting, updateLighting } from '../api/lightingService';

const LightingControl = () => {
  const [currentLightLevel, setCurrentLightLevel] = useState(0);
  const [targetLightLevel, setTargetLightLevel] = useState(50); // Default target

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLighting();
      setCurrentLightLevel(data.currentLightLevel);
      setTargetLightLevel(data.targetLightLevel);
    };

    fetchData();
  }, []);

  const handleLightLevelChange = async (newLightLevel) => {
    setTargetLightLevel(newLightLevel);
    await updateLighting(newLightLevel);
  };

  return (
    <div className="lighting-control">
      <h2>Lighting Control</h2>
      <div>Current Light Level: {currentLightLevel} lx</div>
      <input
        type="range"
        min="0"
        max="1000"
        value={targetLightLevel}
        onChange={(e) => handleLightLevelChange(Number(e.target.value))}
      />
      <p>Target Light Level: {targetLightLevel} lx</p>
    </div>
  );
};

export default LightingControl;
```

### 6. Alerts Component

The `Alerts` component displays system alerts and notifications.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchAlerts } from '../api/alertService';

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const alertData = await fetchAlerts();
      setAlerts(alertData);
    };

    fetchData();
  }, []);

  return (
    <div className="alerts">
      <h2>Alerts</h2>
      {alerts.length > 0 ? (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>{alert.message}</li>
          ))}
        </ul>
      ) : (
        <p>No alerts</p>
      )}
    </div>
  );
};

export default Alerts;
```

### API Integration

You'll need to create API service functions for fetching and updating data. Here are examples for each service:

```jsx
// src/api/overviewService.js
export const fetchOverviewData = async () => {
  const response = await fetch('/api/overview');
  const data = await response.json();
  return data;
};

// src/api/temperatureService.js
export const fetchTemperature = async () => {
  const response = await fetch('/api/temperature');
  const data = await response.json();
  return data;
};

export const updateTemperature = async (newTemperature) => {
  await fetch('/api/temperature', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ temperature: newTemperature }),
  });
};

// src/api/humidityService.js
export const fetchHumidity = async () => {
  const response = await fetch('/api/humidity');
  const data = await response.json();
  return data;
};

export const updateHumidity = async (newHumidity) => {
  await fetch('/api/humidity', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ humidity: newHumidity }),
  });
};

// src/api/lightingService.js
export const fetchLighting = async () => {
  const response = await fetch('/api/lighting');
  const data = await response.json();
  return data;
};

export const updateLighting = async (newLightLevel) => {
  await fetch('/api/lighting', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lightLevel: newLightLevel }),
  });
};

// src/api/alertService.js
export const fetchAlerts = async () => {
  const response = await fetch('/api/alerts');
  const data = await response.json();
  return data;
};
```

### Styling

Add appropriate CSS or use a CSS-in-JS solution to style the components and ensure a clean, user-friendly interface.

This structure should give you a solid foundation for your greenhouse automation dashboard in React, allowing users to monitor and control various aspects of the greenhouse environment effectively.