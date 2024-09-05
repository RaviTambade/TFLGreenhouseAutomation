For a greenhouse automation system focusing on the irrigation aspect, you'll need to create several React components that allow users to monitor and control the irrigation system. Here's a structured approach to building these components:

### Component Breakdown

1. **IrrigationControl Component**: Main component to manage irrigation settings.
2. **IrrigationSchedule Component**: Interface for setting up and viewing irrigation schedules.
3. **SoilMoistureDisplay Component**: Shows current soil moisture levels.
4. **IrrigationAlerts Component**: Displays notifications or alerts related to the irrigation system.

### 1. IrrigationControl Component

The `IrrigationControl` component will serve as the main container for irrigation-related controls.

```jsx
import React from 'react';
import IrrigationSchedule from './IrrigationSchedule';
import SoilMoistureDisplay from './SoilMoistureDisplay';
import IrrigationAlerts from './IrrigationAlerts';

const IrrigationControl = () => {
  return (
    <div className="irrigation-control">
      <h2>Irrigation System</h2>
      <IrrigationSchedule />
      <SoilMoistureDisplay />
      <IrrigationAlerts />
    </div>
  );
};

export default IrrigationControl;
```

### 2. IrrigationSchedule Component

The `IrrigationSchedule` component allows users to set and view irrigation schedules.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchIrrigationSchedule, updateIrrigationSchedule } from '../api/irrigationService';

const IrrigationSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const scheduleData = await fetchIrrigationSchedule();
      setSchedule(scheduleData);
    };

    fetchData();
  }, []);

  const handleScheduleChange = async (newSchedule) => {
    await updateIrrigationSchedule(newSchedule);
    setSchedule(newSchedule); // Update the local state with new schedule
  };

  return (
    <div className="irrigation-schedule">
      <h3>Irrigation Schedule</h3>
      {/* Implement a schedule UI */}
      <div>
        <p>View and adjust your irrigation schedule here.</p>
        {/* Example input form for schedule */}
        <input type="text" placeholder="Enter new schedule" onChange={(e) => handleScheduleChange(e.target.value)} />
      </div>
      <ul>
        {schedule.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default IrrigationSchedule;
```

### 3. SoilMoistureDisplay Component

The `SoilMoistureDisplay` component shows the current soil moisture levels.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchSoilMoisture } from '../api/soilMoistureService';

const SoilMoistureDisplay = () => {
  const [moistureLevel, setMoistureLevel] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSoilMoisture();
      setMoistureLevel(data.moistureLevel);
    };

    fetchData();
  }, []);

  return (
    <div className="soil-moisture-display">
      <h3>Soil Moisture Level</h3>
      <p>{moistureLevel} %</p>
    </div>
  );
};

export default SoilMoistureDisplay;
```

### 4. IrrigationAlerts Component

The `IrrigationAlerts` component displays any alerts or notifications related to the irrigation system.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchIrrigationAlerts } from '../api/alertService';

const IrrigationAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const alertData = await fetchIrrigationAlerts();
      setAlerts(alertData);
    };

    fetchData();
  }, []);

  return (
    <div className="irrigation-alerts">
      <h3>Alerts</h3>
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

export default IrrigationAlerts;
```

### API Integration

You'll need to create API service functions for fetching and updating irrigation-related data. Here’s a basic example for each service:

```jsx
// src/api/irrigationService.js
export const fetchIrrigationSchedule = async () => {
  const response = await fetch('/api/irrigation/schedule');
  const data = await response.json();
  return data.schedule;
};

export const updateIrrigationSchedule = async (newSchedule) => {
  await fetch('/api/irrigation/schedule', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ schedule: newSchedule }),
  });
};

// src/api/soilMoistureService.js
export const fetchSoilMoisture = async () => {
  const response = await fetch('/api/soil/moisture');
  const data = await response.json();
  return data;
};

// src/api/alertService.js
export const fetchIrrigationAlerts = async () => {
  const response = await fetch('/api/irrigation/alerts');
  const data = await response.json();
  return data.alerts;
};
```

### Styling

You’ll need to add CSS or use a CSS-in-JS library to style these components and make the dashboard visually appealing. This might include layout styling, responsive design adjustments, and visual enhancements for user interaction.

### Additional Features

Depending on your requirements, you might consider adding:

- **Real-time Updates**: Use WebSockets or polling to keep data up-to-date.
- **User Feedback**: Implement loading indicators and error messages for a better user experience.
- **Accessibility**: Ensure your application is accessible to all users by following accessibility best practices.

This setup should give you a comprehensive irrigation management system within your greenhouse automation dashboard, allowing users to monitor and control the irrigation process effectively.