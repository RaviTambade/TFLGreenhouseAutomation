To manage and display light intensity control in a greenhouse automation system using React, you'll need components that allow users to view and adjust the light intensity levels. Here’s how you can structure these components:

### Component Breakdown

1. **IntensityControl Component**: Main component to manage and display light intensity controls.
2. **IntensityDisplay Component**: Shows the current light intensity level.
3. **IntensityControlForm Component**: Interface for setting or adjusting light intensity levels.
4. **IntensityAlerts Component**: Displays any alerts related to light intensity.

### 1. IntensityControl Component

The `IntensityControl` component serves as the main container for all light intensity-related components.

```jsx
import React from 'react';
import IntensityDisplay from './IntensityDisplay';
import IntensityControlForm from './IntensityControlForm';
import IntensityAlerts from './IntensityAlerts';

const IntensityControl = () => {
  return (
    <div className="intensity-control">
      <h2>Light Intensity Control</h2>
      <IntensityDisplay />
      <IntensityControlForm />
      <IntensityAlerts />
    </div>
  );
};

export default IntensityControl;
```

### 2. IntensityDisplay Component

The `IntensityDisplay` component shows the current light intensity level.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchCurrentIntensity } from '../api/intensityService';

const IntensityDisplay = () => {
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCurrentIntensity();
      setIntensity(data.currentIntensity);
    };

    fetchData();
  }, []);

  return (
    <div className="intensity-display">
      <h3>Current Light Intensity</h3>
      <p>{intensity} %</p>
    </div>
  );
};

export default IntensityDisplay;
```

### 3. IntensityControlForm Component

The `IntensityControlForm` component allows users to set or adjust the desired light intensity level.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchIntensitySettings, updateIntensitySettings } from '../api/intensityService';

const IntensityControlForm = () => {
  const [intensity, setIntensity] = useState(50); // Default value or fetched value
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const settings = await fetchIntensitySettings();
      setIntensity(settings.defaultIntensity);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSettings = { intensity };

    await updateIntensitySettings(newSettings);
    
    // Clear form and ID
    setIntensity(50); // Reset to default or previous value
    setEditId(null);
  };

  return (
    <div className="intensity-control-form">
      <h3>Set Light Intensity</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Intensity (%):</label>
          <input
            type="number"
            min="0"
            max="100"
            value={intensity}
            onChange={(e) => setIntensity(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Set Intensity</button>
      </form>
    </div>
  );
};

export default IntensityControlForm;
```

### 4. IntensityAlerts Component

The `IntensityAlerts` component shows any alerts or notifications related to the light intensity.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchIntensityAlerts } from '../api/alertService';

const IntensityAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const alertData = await fetchIntensityAlerts();
      setAlerts(alertData);
    };

    fetchData();
  }, []);

  return (
    <div className="intensity-alerts">
      <h3>Intensity Alerts</h3>
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

export default IntensityAlerts;
```

### API Integration

Here’s how you might implement the API service functions for managing light intensity:

```jsx
// src/api/intensityService.js
export const fetchCurrentIntensity = async () => {
  const response = await fetch('/api/light/intensity/current');
  const data = await response.json();
  return data;
};

export const fetchIntensitySettings = async () => {
  const response = await fetch('/api/light/intensity/settings');
  const data = await response.json();
  return data;
};

export const updateIntensitySettings = async (settings) => {
  await fetch('/api/light/intensity/settings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(settings),
  });
};

// src/api/alertService.js
export const fetchIntensityAlerts = async () => {
  const response = await fetch('/api/light/intensity/alerts');
  const data = await response.json();
  return data.alerts;
};
```

### Styling

Ensure you add CSS to style these components effectively. Focus on layout, spacing, and interactivity to enhance the user experience.

### Additional Features

1. **Real-time Updates**: Implement WebSocket or polling to keep light intensity data updated in real-time.
2. **User Feedback**: Include loading indicators, error handling, and validation for the intensity input.
3. **Accessibility**: Follow accessibility best practices to ensure usability for all users.

By developing these components, you will create a robust interface for managing and monitoring light intensity in your greenhouse automation system, giving users the ability to efficiently control and adjust their lighting setup.