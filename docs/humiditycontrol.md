For a greenhouse automation system with a focus on humidity control, you need to create several React components to manage and monitor humidity levels. These components will allow users to view current humidity levels, adjust settings, and receive alerts related to humidity. Here's a structured approach to building these components:

### Component Breakdown

1. **HumidityControl Component**: Main component to manage and display humidity controls.
2. **HumiditySettings Component**: Interface for setting humidity thresholds and control parameters.
3. **HumidityDisplay Component**: Shows the current humidity level.
4. **HumidityAlerts Component**: Displays any alerts related to humidity.

### 1. HumidityControl Component

The `HumidityControl` component will serve as the main container for all humidity-related controls and displays.

```jsx
import React from 'react';
import HumidityDisplay from './HumidityDisplay';
import HumiditySettings from './HumiditySettings';
import HumidityAlerts from './HumidityAlerts';

const HumidityControl = () => {
  return (
    <div className="humidity-control">
      <h2>Humidity Control</h2>
      <HumidityDisplay />
      <HumiditySettings />
      <HumidityAlerts />
    </div>
  );
};

export default HumidityControl;
```

### 2. HumiditySettings Component

The `HumiditySettings` component allows users to set and adjust humidity thresholds and settings.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchHumiditySettings, updateHumiditySettings } from '../api/humidityService';

const HumiditySettings = () => {
  const [targetHumidity, setTargetHumidity] = useState(50); // Default target humidity
  const [thresholds, setThresholds] = useState({ min: 30, max: 70 });

  useEffect(() => {
    const fetchData = async () => {
      const settings = await fetchHumiditySettings();
      setTargetHumidity(settings.targetHumidity);
      setThresholds(settings.thresholds);
    };

    fetchData();
  }, []);

  const handleTargetHumidityChange = async (newHumidity) => {
    setTargetHumidity(newHumidity);
    await updateHumiditySettings({ targetHumidity: newHumidity, thresholds });
  };

  const handleThresholdChange = async (min, max) => {
    setThresholds({ min, max });
    await updateHumiditySettings({ targetHumidity, thresholds: { min, max } });
  };

  return (
    <div className="humidity-settings">
      <h3>Humidity Settings</h3>
      <div>
        <label>Target Humidity:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={targetHumidity}
          onChange={(e) => handleTargetHumidityChange(Number(e.target.value))}
        />
        <p>{targetHumidity} %</p>
      </div>
      <div>
        <label>Min Threshold:</label>
        <input
          type="number"
          min="0"
          max="100"
          value={thresholds.min}
          onChange={(e) => handleThresholdChange(Number(e.target.value), thresholds.max)}
        />
        <label>Max Threshold:</label>
        <input
          type="number"
          min="0"
          max="100"
          value={thresholds.max}
          onChange={(e) => handleThresholdChange(thresholds.min, Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default HumiditySettings;
```

### 3. HumidityDisplay Component

The `HumidityDisplay` component shows the current humidity level in the greenhouse.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchCurrentHumidity } from '../api/humidityService';

const HumidityDisplay = () => {
  const [humidity, setHumidity] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCurrentHumidity();
      setHumidity(data.currentHumidity);
    };

    fetchData();
  }, []);

  return (
    <div className="humidity-display">
      <h3>Current Humidity</h3>
      <p>{humidity} %</p>
    </div>
  );
};

export default HumidityDisplay;
```

### 4. HumidityAlerts Component

The `HumidityAlerts` component displays any alerts or notifications related to humidity levels.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchHumidityAlerts } from '../api/alertService';

const HumidityAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const alertData = await fetchHumidityAlerts();
      setAlerts(alertData);
    };

    fetchData();
  }, []);

  return (
    <div className="humidity-alerts">
      <h3>Humidity Alerts</h3>
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

export default HumidityAlerts;
```

### API Integration

Here’s how you might implement the API service functions for humidity control:

```jsx
// src/api/humidityService.js
export const fetchHumiditySettings = async () => {
  const response = await fetch('/api/humidity/settings');
  const data = await response.json();
  return data;
};

export const updateHumiditySettings = async (settings) => {
  await fetch('/api/humidity/settings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(settings),
  });
};

export const fetchCurrentHumidity = async () => {
  const response = await fetch('/api/humidity/current');
  const data = await response.json();
  return data;
};

// src/api/alertService.js
export const fetchHumidityAlerts = async () => {
  const response = await fetch('/api/humidity/alerts');
  const data = await response.json();
  return data.alerts;
};
```

### Styling

You’ll need to add CSS or use a CSS-in-JS library to style these components effectively. This includes layout styles, responsive design considerations, and visual elements to enhance user experience.

### Additional Features

1. **Real-time Updates**: Consider implementing WebSocket or polling to keep data updated in real-time.
2. **User Feedback**: Include loading indicators and error messages for better usability.
3. **Accessibility**: Ensure your components follow accessibility best practices to accommodate all users.

With these components, you'll create a comprehensive humidity control system within your greenhouse automation dashboard, allowing users to monitor and adjust humidity levels effectively.