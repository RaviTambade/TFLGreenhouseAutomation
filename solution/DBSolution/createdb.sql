DROP DATABASE IF EXISTS TFLGreenHouse;
CREATE DATABASE  TFLGreenHouse;
USE TFLGreenHouse;
create table temperaturesreadings(
                                  id Int auto_increment primary key,
                                  tem_time datetime DEFAULT NOW(),
								  internal_temp double ,external_temp double); 
                                  
create table humidityreadings(
                              id Int auto_increment primary key,
                              humidity_time datetime DEFAULT NOW(),
                              humidity  double);
                              
create table watermoisturelevelreadings(
                                        id Int auto_increment primary key,
                                        watermoisture_time datetime DEFAULT NOW(),
										moisture  double); 
                                        
create table windspeedreadings(
                               id Int auto_increment primary key,
                               windspeed_time datetime DEFAULT NOW(),
                               speed  double);
                               
create table lumincityreadings(
                               id Int auto_increment primary key,
                               lumincity_time datetime DEFAULT NOW(),
                               reading double);  


DROP EVENT IF EXISTS temperature_reader_event; 
CREATE EVENT  temperature_reader_event
ON SCHEDULE EVERY 10 second
STARTS CURRENT_TIMESTAMP
DO
Call sptemperaturesreadings();


DROP EVENT IF EXISTS humidity_reader_event;
CREATE EVENT  humidity_reader_event
ON SCHEDULE EVERY 10 second
STARTS CURRENT_TIMESTAMP
DO
Call sphumidityreadings();

DROP EVENT IF EXISTS moisture_reader_event;
CREATE EVENT  moisture_reader_event
ON SCHEDULE EVERY 10 second
STARTS CURRENT_TIMESTAMP
DO
Call spwatermoisturelevelreadings();

DROP EVENT IF EXISTS windspeed_reader_event;
CREATE EVENT  windspeed_reader_event
ON SCHEDULE EVERY 10 second
STARTS CURRENT_TIMESTAMP
DO
Call spwindspeedreadings();

DROP EVENT IF EXISTS lumincity_reader_event;
CREATE EVENT  lumincity_reader_event
ON SCHEDULE EVERY 10 second
STARTS CURRENT_TIMESTAMP
DO
Call splumincityreadings();

-- Cusror ---------------------------------------------------------------------------
CREATE TABLE employees (
    employeeNumber INT PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    extension VARCHAR(10),
    email VARCHAR(100),
    officeCode VARCHAR(10),
    reportsTo INT,
    jobTitle VARCHAR(50)
);

INSERT INTO employees (employeeNumber, firstName, lastName, extension, email, officeCode, reportsTo, jobTitle) 
VALUES 
(1, 'John', 'Doe', '1234', 'john.doe@example.com', 'XYZ123', NULL, 'Manager'),
(2, 'Jane', 'Smith', '5678', 'jane.smith@example.com', 'ABC456', 1, 'Assistant Manager'),
(3, 'Mark', 'Johnson', '9876', 'mark.johnson@example.com', 'DEF789', 1, 'Supervisor'),
(4, 'Emily', 'Brown', '5432', 'emily.brown@example.com', 'GHI012', 2, 'Sales Executive'),
(5, 'Michael', 'Jones', '2468', 'michael.jones@example.com', 'JKL345', 2, 'HR Specialist'),
(6, 'Sarah', 'Davis', '1357', 'sarah.davis@example.com', 'MNO678', 3, 'Marketing Coordinator'),
(7, 'Chris', 'Wilson', '8765', 'chris.wilson@example.com', 'PQR901', 3, 'IT Support'),
(8, 'Amanda', 'Clark', '4321', 'amanda.clark@example.com', 'STU234', 4, 'Accountant'),
(9, 'Peter', 'Martinez', '7890', 'peter.martinez@example.com', 'VWX567', 4, 'Admin Assistant'),
(10, 'Laura', 'Garcia', '6543', 'laura.garcia@example.com', 'YZA890', 5, 'Recruiter');

select * from employees








  
  
 
  
 
  
  
  