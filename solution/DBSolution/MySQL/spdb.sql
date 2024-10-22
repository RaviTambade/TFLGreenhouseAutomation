DROP PROCEDURE IF EXISTS sptemperaturesreadings;
DELIMITER $$
CREATE PROCEDURE sptemperaturesreadings()
BEGIN
	INSERT INTO temperaturesreadings(internal_temp,external_temp)
    VALUES(RAND()*(10-5)+5,RAND()*(10-5)+5);
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS sphumidityreadings;
DELIMITER $$
CREATE PROCEDURE sphumidityreadings()
BEGIN
	INSERT INTO humidityreadings(humidity)
    VALUES(RAND()*(10-5)+5);
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spwatermoisturelevelreadings;
DELIMITER $$
CREATE PROCEDURE spwatermoisturelevelreadings()
BEGIN
	INSERT INTO watermoisturelevelreadings(moisture)
    VALUES(RAND()*(10-5)+5);
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spwindspeedreadings;
DELIMITER $$
CREATE PROCEDURE spwindspeedreadings()
BEGIN
	INSERT INTO windspeedreadings(speed)
    VALUES(RAND()*(10-5)+5);
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS splumincityreadings;
DELIMITER $$
CREATE PROCEDURE splumincityreadings()
BEGIN
	INSERT INTO lumincityreadings(reading)
    VALUES(RAND()*(10-5)+5);
END$$
DELIMITER ;

-- Cursor ----------------------------------------------------------------------
DROP PROCEDURE IF EXISTS spcreate_email_list
DELIMITER $$
CREATE PROCEDURE spcreate_email_list (INOUT email_list TEXT)
BEGIN
	DECLARE done BOOL DEFAULT false;
	DECLARE email_address VARCHAR(100) DEFAULT "";
    
	-- declare cursor for employee email
	DECLARE cur CURSOR FOR SELECT email FROM employees;

	-- declare NOT FOUND handler
	DECLARE CONTINUE HANDLER 
        FOR NOT FOUND SET done = true;
	
    -- open the cursor
	OPEN cur;
	
    SET email_list = '';
	
    process_email: LOOP
		
        FETCH cur INTO email_address;
        
		IF done = true THEN 
			LEAVE process_email;
		END IF;
		
        -- concatenate the email into the emailList
		SET email_list = CONCAT(email_address,";",email_list);
	END LOOP;
    
    -- close the cursor
	CLOSE cur;

END$$

DELIMITER ;

CALL spcreate_email_list(@email_list); 
SELECT @email_list;

