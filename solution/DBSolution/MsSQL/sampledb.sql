INSERT INTO Users (Username, PasswordHash, Role) VALUES 
('admin', 'hashed_password_1', 'Admin'),
('user1', 'hashed_password_2', 'User'),
('user2', 'hashed_password_3', 'User');
 
-- Inserting into Sensors
INSERT INTO Sensors (SensorType, Location, Description) VALUES 
('Temperature', 'Greenhouse 1', 'Monitors the temperature inside the greenhouse'),
('Humidity', 'Greenhouse 1', 'Monitors the humidity level'),
('Soil Moisture', 'Greenhouse 1', 'Measures moisture level in the soil'),
('Light', 'Greenhouse 1', 'Measures light intensity');
 
-- Inserting into SensorReadings
INSERT INTO SensorReadings (SensorID, ReadingValue, ReadingTime) VALUES 
(1, 22.5, GETDATE()),  -- Temperature reading
(2, 60.0, GETDATE()),  -- Humidity reading
(3, 30.0, GETDATE()),  -- Soil moisture reading
(4, 500, GETDATE()),    -- Light intensity reading
(1, 40, GETDATE());