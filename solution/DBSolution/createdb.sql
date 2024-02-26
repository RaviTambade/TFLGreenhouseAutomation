
drop database If exists TFLGreenHouse;
create database  TFLGreenHouse;
use TFLGreenHouse;
create table temperaturesreadings(id Int auto_increment primary key, time datetime DEFAULT NOW(),internal int ,external int);
 
CREATE EVENT IF NOT EXISTS temperature_reader_event
ON SCHEDULE EVERY 10 second
STARTS CURRENT_TIMESTAMP
DO
  INSERT INTO temperaturesreadings(internal,external)
  VALUES(RAND()*(10-5)+5,RAND()*(10-5)+5);

select * from  temperaturesreadings;
SHOW EVENTS FROM TFLGreenHouse;