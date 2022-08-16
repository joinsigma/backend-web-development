CREATE TABLE `carsome_clone`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NULL,
  `email` VARCHAR(155) NOT NULL,
  `username` CHAR(12) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `type` CHAR(12) DEFAULT 'customer',
  `zip_code` CHAR(7) NULL,
  `created_by` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` INT NULL,
  `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE `carsome_clone`.`car_model` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `make` VARCHAR(45) NOT NULL,
  `year` INT NOT NULL,
  `transmission` CHAR(20) NOT NULL,
  `bodyType` TINYINT(4) NOT NULL,
  `created_by` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` INT NULL,
  `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- DROP TABLE `carsome_clone`.`car_model`;
CREATE TABLE `carsome_clone`.`car_lot` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ownerId` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `created_by` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` INT NULL,
  `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

ALTER TABLE
  `carsome_clone`.`car_lot`
ADD
  CONSTRAINT `user_car_lot_ownerId` FOREIGN KEY (`ownerId`) REFERENCES `carsome_clone`.`user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE `carsome_clone`.`car` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `carLotId` INT NOT NULL,
  `carModelId` INT NOT NULL,
  `colour` VARCHAR(45) NOT NULL DEFAULT 'BLACK',
  `price` DOUBLE NOT NULL,
  `regNo` VARCHAR(45) NULL,
  `regDate` DATE NULL,
  `initialMileage` BIGINT NULL DEFAULT 0,
  `created_by` INT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` INT NULL,
  `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `car_lot_car_car_lot_id _idx` (`carLotId` ASC) VISIBLE,
  INDEX `car_model_car_car_model_id_idx` (`carModelId` ASC) VISIBLE,
  CONSTRAINT `car_lot_car_car_lot_id` FOREIGN KEY (`carLotId`) REFERENCES `carsome_clone`.`car_lot` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `car_model_car_car_model_id` FOREIGN KEY (`carModelId`) REFERENCES `carsome_clone`.`car_model` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE `carsome_clone`.`car_payment` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `carId` INT NOT NULL,
  `userId` INT NOT NULL,
  `paymentMode` VARCHAR(45) NOT NULL DEFAULT 'CREDIT_CARD',
  `amountPaid` DOUBLE NOT NULL,
  `priceDifference` DOUBLE NOT NULL DEFAULT 0,
  `status` TINYINT(4) NOT NULL,
  `created_by` INT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` INT NULL,
  `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `user_car_payment_userId_idx` (`userId` ASC) VISIBLE,
  INDEX `car_car_payment_carId_idx` (`carId` ASC) VISIBLE,
  CONSTRAINT `user_car_payment_userId` FOREIGN KEY (`userId`) REFERENCES `carsome_clone`.`user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `car_car_payment_carId` FOREIGN KEY (`carId`) REFERENCES `carsome_clone`.`car` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
);