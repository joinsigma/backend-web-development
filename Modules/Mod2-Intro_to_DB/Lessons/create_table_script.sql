CREATE TABLE `car_app`.`user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NULL,
    `email` VARCHAR(155) NOT NULL,
    `username` CHAR(12) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `type` CHAR(12) DEFAULT 'customer',
    `zipCode` CHAR(7) NULL,
    `createdBy` INT NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedBy` INT NULL,
    `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);