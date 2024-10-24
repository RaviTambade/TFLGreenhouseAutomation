INSERT INTO Users (Username, PasswordHash, Role) VALUES 
('admin', 'hashed_password_1', 'Admin'),
('user1', 'hashed_password_2', 'User'),
('user2', 'hashed_password_3', 'User');
 
-- Inserting into Sensors
INSERT INTO Sensors (SensorType, Location, Description) VALUES 
('Temperature', 'Greenhouse 1', 'Monitors the temperature inside the greenhouse'),
('Humidity', 'Greenhouse 1', 'Monitors the humidity level'),
('Soil Moisture', 'Greenhouse 1', 'Measures moisture level in the soil'),
('Light', 'Greenhouse 1', 'Measures light intensity'),
('CO2', 'Greenhouse 1', 'Measures CO2 Levels');
 
-- Inserting into SensorReadings
INSERT INTO SensorReadings (SensorID, ReadingValue, ReadingTime) VALUES

(1, 22.5, GETDATE()),  -- Temperature reading
(2, 60.0, GETDATE()),  -- Humidity reading
(3, 30.0, GETDATE()),  -- Soil moisture reading
(4, 500, GETDATE()),    -- Light intensity reading
(1, 40, GETDATE()),		-- Temperature reading
(2, 50, GETDATE()),		-- Humidity reading
(3, 30, GETDATE()),		-- Soil moisture reading
(4, 508, GETDATE()),
(5, 300, GETDATE());	-- Light intensity reading


-- Inserting into ControlDevices

INSERT INTO ControlDevices (DeviceType, Status, Location) VALUES 

('Water Pump', 'Off', 'Greenhouse 1'),
('Heater', 'On', 'Greenhouse 1'),
('Fan', 'Off', 'Greenhouse 1'),
('LED Grow Light', 'On', 'Greenhouse 1');
 
-- Inserting into Settings

INSERT INTO Settings (SensorType, ThresholdMin, ThresholdMax, NotificationEnabled) VALUES 
('CO2', 150,1000, 1), 
('Temperature', 18.0, 28.0, 1),  -- Alerts if out of range
('Humidity', 40.0, 70.0, 1),     -- Alerts if out of range
('Soil Moisture', 20.0, 50.0, 1), -- Alerts if out of range
('Light', 200, 800, 1);            -- Alerts if out of range
 
 -- Insert into ControlLogs
 
INSERT INTO ControlLogs(DeviceID,Action,ActionTime) VALUES 

(1,'Started',GETDATE()),
(2,'Stopped',GETDATE()),
(3,'Started',GETDATE()),
(4,'Stopped',GETDATE());
