CREATE DATABASE shopee_clone;

-- SCRIPTS go here
-- FOLLOW THIS NAMING CONVENTION
--   - TABLE NAMES - Singlular, snake_case
--   - COLUMN NAMES - camelCase

-- DROP DATABASE shopee_clone;
CREATE TABLE `shopee_clone`.`user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(45) NOT NULL,
    `lastName` VARCHAR(45) NULL,
    `email` VARCHAR(90) NOT NULL,
    `username` VARCHAR(45) NULL,
    `password` VARCHAR(45) NOT NULL,
    `type` VARCHAR(45) NULL,
    `zipCode` CHAR(15) NULL,
    `createdBy` INT NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedBy` INT NULL,
    `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);