For a greenhouse automation system focused on managing a watering schedule, you'll need React components that enable users to view, set, and manage watering schedules. Below is a structured approach to building these components, which will help users efficiently handle their greenhouse's watering needs.

### Component Breakdown

1. **WateringScheduleManager Component**: Main component to manage and display watering schedules.
2. **WateringScheduleList Component**: Displays a list of current watering schedules.
3. **WateringScheduleForm Component**: Interface for adding or editing watering schedules.
4. **WateringScheduleAlerts Component**: Displays any alerts related to watering schedules.

### 1. WateringScheduleManager Component

The `WateringScheduleManager` component serves as the container for all the watering schedule-related components.

```jsx
import React from 'react';
import WateringScheduleList from './WateringScheduleList';
import WateringScheduleForm from './WateringScheduleForm';
import WateringScheduleAlerts from './WateringScheduleAlerts';

const WateringScheduleManager = () => {
  return (
    <div className="watering-schedule-manager">
      <h2>Watering Schedule</h2>
      <WateringScheduleList />
      <WateringScheduleForm />
      <WateringScheduleAlerts />
    </div>
  );
};

export default WateringScheduleManager;
```

### 2. WateringScheduleList Component

The `WateringScheduleList` component displays a list of current watering schedules, allowing users to view and delete schedules.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchWateringSchedules, deleteWateringSchedule } from '../api/wateringService';

const WateringScheduleList = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const scheduleData = await fetchWateringSchedules();
      setSchedules(scheduleData);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteWateringSchedule(id);
    setSchedules(schedules.filter(schedule => schedule.id !== id));
  };

  return (
    <div className="watering-schedule-list">
      <h3>Current Schedules</h3>
      {schedules.length > 0 ? (
        <ul>
          {schedules.map(schedule => (
            <li key={schedule.id}>
              {schedule.time} - {schedule.duration} minutes
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

export default WateringScheduleList;
```

### 3. WateringScheduleForm Component

The `WateringScheduleForm` component allows users to add or edit a watering schedule.

```jsx
import React, { useState, useEffect } from 'react';
import { addWateringSchedule, updateWateringSchedule } from '../api/wateringService';

const WateringScheduleForm = () => {
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const schedule = { time, duration: Number(duration) };

    if (editId) {
      await updateWateringSchedule(editId, schedule);
    } else {
      await addWateringSchedule(schedule);
    }

    // Clear form and ID
    setTime('');
    setDuration('');
    setEditId(null);
  };

  return (
    <div className="watering-schedule-form">
      <h3>{editId ? 'Edit Schedule' : 'Add Schedule'}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Duration (minutes):</label>
          <input
            type="number"
            min="1"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <button type="submit">{editId ? 'Update' : 'Add'} Schedule</button>
      </form>
    </div>
  );
};

export default WateringScheduleForm;
```

### 4. WateringScheduleAlerts Component

The `WateringScheduleAlerts` component shows any alerts or notifications related to watering schedules.

```jsx
import React, { useState, useEffect } from 'react';
import { fetchWateringAlerts } from '../api/alertService';

const WateringScheduleAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const alertData = await fetchWateringAlerts();
      setAlerts(alertData);
    };

    fetchData();
  }, []);

  return (
    <div className="watering-schedule-alerts">
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

export default WateringScheduleAlerts;
```

### API Integration

You’ll need to create API service functions to manage watering schedules and alerts. Here’s an example of how you might implement these functions:

```jsx
// src/api/wateringService.js
export const fetchWateringSchedules = async () => {
  const response = await fetch('/api/watering/schedules');
  const data = await response.json();
  return data.schedules;
};

export const addWateringSchedule = async (schedule) => {
  await fetch('/api/watering/schedules', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(schedule),
  });
};

export const updateWateringSchedule = async (id, schedule) => {
  await fetch(`/api/watering/schedules/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(schedule),
  });
};

export const deleteWateringSchedule = async (id) => {
  await fetch(`/api/watering/schedules/${id}`, {
    method: 'DELETE',
  });
};

// src/api/alertService.js
export const fetchWateringAlerts = async () => {
  const response = await fetch('/api/watering/alerts');
  const data = await response.json();
  return data.alerts;
};
```

### Styling

Make sure to add CSS to style these components appropriately. Consider layout, spacing, and visual feedback to enhance usability.

### Additional Features

1. **Real-time Updates**: Implement WebSocket or polling to keep the schedule data up-to-date.
2. **User Feedback**: Include loading states and error handling to improve the user experience.
3. **Accessibility**: Ensure components follow accessibility best practices for inclusive design.

By building these components, you'll provide users with a comprehensive interface to manage watering schedules in their greenhouse automation system, helping them to efficiently control their irrigation setup.