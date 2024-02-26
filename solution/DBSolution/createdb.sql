

drop database If exists TFLGreenHouse;
create database  TFLGreenHouse;
use TFLGreenHouse;
create table temperaturesreadings(id Int auto_increment primary key, time datetime DEFAULT NOW(),internal int ,external int); 




DELIMITER $$

CREATE PROCEDURE sptemperaturesreadings()
BEGIN
	INSERT INTO temperaturesreadings(internal,external)
  VALUES(RAND()*(10-5)+5,RAND()*(10-5)+5);

END$$
DELIMITER ;
 
 
 
CREATE EVENT IF NOT EXISTS temperature_reader_event
ON SCHEDULE EVERY 10 second
STARTS CURRENT_TIMESTAMP
Ends CURRENT_TIMESTAMP + interval 5 minute
DO
Call sptemperaturesreadings();

  
  
 
  
  select * from  temperaturesreadings;
  
  SHOW EVENTS FROM TFLGreenHouse;