

drop database If exists TFLGreenHouse;
create database  TFLGreenHouse;
use TFLGreenHouse;
create table temperaturesreadings(id Int auto_increment primary key, tem_time datetime DEFAULT NOW(),internal_temp double ,external_temp double); 
create table humidityreadings(id Int auto_increment primary key, humidity_time datetime DEFAULT NOW(),humidity  double); 
create table watermoisturelevelreadinds(id Int auto_increment primary key, watermoisture_time datetime DEFAULT NOW(),moisture  double); 
create table windspeedreadings(id Int auto_increment primary key, windspeed_time datetime DEFAULT NOW(),speed  double);
create table lumincityreadings(id Int auto_increment primary key, lumincity_time datetime DEFAULT NOW(),reading double);  









 
 
 
 drop event  IF exists temperature_reader_event; 
 
CREATE EVENT  temperature_reader_event
ON SCHEDULE EVERY 10 second
STARTS CURRENT_TIMESTAMP

DO
Call sptemperaturesreadings();


drop event  IF exists humidity_reader_event;
CREATE EVENT  humidity_reader_event
ON SCHEDULE EVERY 10 second
STARTS CURRENT_TIMESTAMP

DO
Call sphumidityreadings();











  
  
 
  
  select * from  temperaturesreadings;
  
  select * from  humidityreadings;
  
  
  
  SHOW EVENTS FROM TFLGreenHouse;