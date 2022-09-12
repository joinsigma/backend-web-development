CREATE DATABASE shopee_clone;

-- DROP DATABASE shopee_clone;
CREATE TABLE `shopee_clone`.`user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NULL,
    `email` VARCHAR(90) NOT NULL,
    `username` VARCHAR(45) NULL,
    `password` VARCHAR(45) NOT NULL,
    `type` VARCHAR(45) NULL,
    `zip_code` CHAR(15) NULL,
    `created_by` INT NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_by` INT NULL,
    `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);