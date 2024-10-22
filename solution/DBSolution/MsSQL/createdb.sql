-- creating a database tflgreenhouseautomation
CREATE DATABASE TFLGreenhouseAutomation;

-- use the database
USE TFLGreenhouseAutomation;

-- creating a table users
CREATE TABLE Users (
	UserID INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(50) NOT NULL,
    PasswordHash NVARCHAR(255) NOT NULL,
    Role NVARCHAR(20) NOT NULL, -- e.g., Admin, User
    CreatedAt DATETIME DEFAULT GETDATE()
);

-- creating a table Sensors
CREATE TABLE Sensors (
	SensorID INT PRIMARY KEY IDENTITY(1,1),
    SensorType NVARCHAR(50) NOT NULL, -- e.g., Temperature, Humidity
    Location NVARCHAR(100) NOT NULL,
    Description NVARCHAR(255),
    CreatedAt DATETIME DEFAULT GETDATE()
);

-- creating a table SensorReadings
CREATE TABLE SensorReadings (
	ReadingID INT PRIMARY KEY IDENTITY(1,1),
    SensorID INT FOREIGN KEY REFERENCES Sensors(SensorID),
    ReadingValue FLOAT NOT NULL,
    ReadingTime DATETIME DEFAULT GETDATE()
);



