To manage and display moisture levels in a greenhouse automation system using React, you'll need a set of components that allow users to monitor current soil moisture levels, adjust settings, and receive alerts. Below is a structured approach to creating these components:

### Component Breakdown

1. **MoistureControl Component**: Main component to manage and display soil moisture-related controls and information.
2. **MoistureDisplay Component**: Shows the current moisture levels.
3. **MoistureSettings Component**: Interface for adjusting moisture thresholds and control parameters.
4. **MoistureAlerts Component**: Displays any alerts or notifications related to moisture levels.

### 1. MoistureControl Component

The `MoistureControl` component serves as the main container for all moisture-related components.

```jsx
import React from 'react';
import MoistureDisplay from './MoistureDisplay';
import MoistureSettings from './MoistureSettings';
import MoistureAlerts from './MoistureAlerts';

const MoistureControl = () => {
  return (
    <div className="moisture-control">
      <h2>Soil Moisture Control</h2>
      <MoistureDisplay />
      <MoistureSettings />
      <MoistureAlerts />
    </div>
  );
};

export default MoistureControl;
```

### 2. MoistureDisplay Component

The `MoistureDisplay` component shows the current moisture level of the soil.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchCurrentMoisture } from '../api/moistureService';

const MoistureDisplay = () => {
  const [moisture, setMoisture] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCurrentMoisture();
      setMoisture(data.currentMoisture);
    };

    fetchData();
  }, []);

  return (
    <div className="moisture-display">
      <h3>Current Moisture Level</h3>
      <p>{moisture} %</p>
    </div>
  );
};

export default MoistureDisplay;
```

### 3. MoistureSettings Component

The `MoistureSettings` component allows users to set and adjust moisture thresholds.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchMoistureSettings, updateMoistureSettings } from '../api/moistureService';

const MoistureSettings = () => {
  const [minMoisture, setMinMoisture] = useState(0);
  const [maxMoisture, setMaxMoisture] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      const settings = await fetchMoistureSettings();
      setMinMoisture(settings.minMoisture);
      setMaxMoisture(settings.maxMoisture);
    };

    fetchData();
  }, []);

  const handleSaveSettings = async () => {
    await updateMoistureSettings({ minMoisture, maxMoisture });
  };

  return (
    <div className="moisture-settings">
      <h3>Moisture Settings</h3>
      <div>
        <label>Min Moisture (%):</label>
        <input
          type="number"
          min="0"
          max="100"
          value={minMoisture}
          onChange={(e) => setMinMoisture(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Max Moisture (%):</label>
        <input
          type="number"
          min="0"
          max="100"
          value={maxMoisture}
          onChange={(e) => setMaxMoisture(Number(e.target.value))}
        />
      </div>
      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
};

export default MoistureSettings;
```

### 4. MoistureAlerts Component

The `MoistureAlerts` component displays any alerts or notifications related to moisture levels.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchMoistureAlerts } from '../api/alertService';

const MoistureAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const alertData = await fetchMoistureAlerts();
      setAlerts(alertData);
    };

    fetchData();
  }, []);

  return (
    <div className="moisture-alerts">
      <h3>Moisture Alerts</h3>
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

export default MoistureAlerts;
```

### API Integration

Here’s how you might implement the API service functions for moisture control:

```jsx
// src/api/moistureService.js
export const fetchCurrentMoisture = async () => {
  const response = await fetch('/api/moisture/current');
  const data = await response.json();
  return data;
};

export const fetchMoistureSettings = async () => {
  const response = await fetch('/api/moisture/settings');
  const data = await response.json();
  return data;
};

export const updateMoistureSettings = async (settings) => {
  await fetch('/api/moisture/settings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(settings),
  });
};

// src/api/alertService.js
export const fetchMoistureAlerts = async () => {
  const response = await fetch('/api/moisture/alerts');
  const data = await response.json();
  return data.alerts;
};
```

### Styling

To ensure your components are visually appealing and user-friendly, you should add CSS to style them appropriately. This includes layout, spacing, and interactive elements.

### Additional Features

1. **Real-time Updates**: Implement WebSocket or polling to keep moisture data updated in real-time.
2. **User Feedback**: Include loading indicators and error handling to enhance user experience.
3. **Accessibility**: Follow accessibility best practices to make your components usable by everyone.

By implementing these components, you will create a comprehensive interface for managing soil moisture levels in your greenhouse automation system, allowing users to effectively monitor and control moisture levels.