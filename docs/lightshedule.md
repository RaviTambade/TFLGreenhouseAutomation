To manage and display light schedules in a greenhouse automation system using React, you’ll need to create components that handle scheduling, display current light status, and provide alerts. Here’s a structured approach to building these components:

### Component Breakdown

1. **LightScheduleManager Component**: Main component for managing light schedules.
2. **LightScheduleList Component**: Displays the current light schedules.
3. **LightScheduleForm Component**: Interface for adding or editing light schedules.
4. **LightStatus Component**: Shows the current light status.
5. **LightAlerts Component**: Displays any alerts related to the light schedule.

### 1. LightScheduleManager Component

The `LightScheduleManager` component is the main container for all light schedule-related components.

```jsx
import React from 'react';
import LightScheduleList from './LightScheduleList';
import LightScheduleForm from './LightScheduleForm';
import LightStatus from './LightStatus';
import LightAlerts from './LightAlerts';

const LightScheduleManager = () => {
  return (
    <div className="light-schedule-manager">
      <h2>Light Schedule Management</h2>
      <LightStatus />
      <LightScheduleList />
      <LightScheduleForm />
      <LightAlerts />
    </div>
  );
};

export default LightScheduleManager;
```

### 2. LightScheduleList Component

The `LightScheduleList` component displays a list of current light schedules, allowing users to view and delete schedules.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchLightSchedules, deleteLightSchedule } from '../api/lightService';

const LightScheduleList = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const scheduleData = await fetchLightSchedules();
      setSchedules(scheduleData);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteLightSchedule(id);
    setSchedules(schedules.filter(schedule => schedule.id !== id));
  };

  return (
    <div className="light-schedule-list">
      <h3>Current Light Schedules</h3>
      {schedules.length > 0 ? (
        <ul>
          {schedules.map(schedule => (
            <li key={schedule.id}>
              {schedule.startTime} to {schedule.endTime}
              <button onClick={() => handleDelete(schedule.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No schedules found</p>
      )}
    </div>
  );
};

export default LightScheduleList;
```

### 3. LightScheduleForm Component

The `LightScheduleForm` component allows users to add or edit a light schedule.

```jsx
import React, { useState, useEffect } from 'react';
import { addLightSchedule, updateLightSchedule } from '../api/lightService';

const LightScheduleForm = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const schedule = { startTime, endTime };

    if (editId) {
      await updateLightSchedule(editId, schedule);
    } else {
      await addLightSchedule(schedule);
    }

    // Clear form and ID
    setStartTime('');
    setEndTime('');
    setEditId(null);
  };

  return (
    <div className="light-schedule-form">
      <h3>{editId ? 'Edit Light Schedule' : 'Add Light Schedule'}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Start Time:</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>End Time:</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">{editId ? 'Update' : 'Add'} Schedule</button>
      </form>
    </div>
  );
};

export default LightScheduleForm;
```

### 4. LightStatus Component

The `LightStatus` component shows the current status of the lighting system, such as whether the lights are currently on or off.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchLightStatus } from '../api/lightService';

const LightStatus = () => {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      const statusData = await fetchLightStatus();
      setStatus(statusData.isOn ? 'On' : 'Off');
    };

    fetchData();
  }, []);

  return (
    <div className="light-status">
      <h3>Current Light Status</h3>
      <p>Lights are currently {status}</p>
    </div>
  );
};

export default LightStatus;
```

### 5. LightAlerts Component

The `LightAlerts` component displays any alerts or notifications related to the light schedule.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchLightAlerts } from '../api/alertService';

const LightAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const alertData = await fetchLightAlerts();
      setAlerts(alertData);
    };

    fetchData();
  }, []);

  return (
    <div className="light-alerts">
      <h3>Light Alerts</h3>
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

export default LightAlerts;
```

### API Integration

Here’s how you might implement the API service functions for managing light schedules and status:

```jsx
// src/api/lightService.js
export const fetchLightSchedules = async () => {
  const response = await fetch('/api/light/schedules');
  const data = await response.json();
  return data.schedules;
};

export const addLightSchedule = async (schedule) => {
  await fetch('/api/light/schedules', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(schedule),
  });
};

export const updateLightSchedule = async (id, schedule) => {
  await fetch(`/api/light/schedules/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(schedule),
  });
};

export const deleteLightSchedule = async (id) => {
  await fetch(`/api/light/schedules/${id}`, {
    method: 'DELETE',
  });
};

export const fetchLightStatus = async () => {
  const response = await fetch('/api/light/status');
  const data = await response.json();
  return data;
};

// src/api/alertService.js
export const fetchLightAlerts = async () => {
  const response = await fetch('/api/light/alerts');
  const data = await response.json();
  return data.alerts;
};
```

### Styling

Apply CSS to style these components effectively. Consider layout, spacing, and interactive elements to improve user experience.

### Additional Features

1. **Real-time Updates**: Implement WebSocket or polling to keep light status and schedules up-to-date.
2. **User Feedback**: Include loading indicators and error handling.
3. **Accessibility**: Ensure components follow best practices for accessibility.

By creating these components, you will offer users a comprehensive interface to manage and monitor light schedules in their greenhouse automation system, helping them to optimize their lighting setup effectively.