

drop procedure sptemperaturesreadings;
 DELIMITER $$

CREATE PROCEDURE sptemperaturesreadings()
BEGIN
	INSERT INTO temperaturesreadings(internal_temp,external_temp)
  VALUES(RAND()*(10-5)+5,RAND()*(10-5)+5);

END$$
DELIMITER ;

drop procedure sphumidityreadings;

DELIMITER $$



CREATE PROCEDURE sphumidityreadings()
BEGIN
	INSERT INTO humidityreadings(humidity)
  VALUES(RAND()*(10-5)+5);

END$$
DELIMITER ;