-- ADDING A COLUMN
ALTER TABLE `car_app`.`user` ADD COLUMN firstName VARCHAR(20);
-- UPDATING AN EXISTING COLUMN'S DATATYPE
ALTER TABLE `car_app`.`user` CHANGE COLUMN firstName VARCHAR(200);
-- DELETING A COLUMN
ALTER TABLE `car_app`.`user` DROP COLUMN firstName;
-- ADDING A PRIMARY KEY
ALTER TABLE `car_app`.`user` ADD CONSTRAINT user_primary_key PRIMARY KEY (id);
ALTER TABLE `car_app`.`user` ADD CONSTRAINT user_primary_key PRIMARY KEY (id, firstName);
