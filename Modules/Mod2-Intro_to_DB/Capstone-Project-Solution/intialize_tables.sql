CREATE SCHEMA `booking_app`;

CREATE TABLE `booking_app`.`user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(90) NOT NULL,
    `lastName` VARCHAR(90) NULL,
    `email` VARCHAR(45) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `passport` VARCHAR(45) NOT NULL,
    `passportExpiry` DATETIME NOT NULL,
    `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedBy` INT NULL,
    `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

CREATE TABLE `booking_app`.`hotel` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(45) NOT NULL,
    `address` varchar(45) NOT NULL,
    `rating` varchar(45) DEFAULT NULL,
    `checkInTime` char(25) NOT NULL,
    `checkOutTIme` char(25) NOT NULL,
    `amenities` varchar(255) DEFAULT NULL,
    `createdBy` int NOT NULL,
    `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedBy` int DEFAULT NULL,
    `updatedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

CREATE TABLE `booking_app`.`roomDetail` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(90) NOT NULL,
    `description` varchar(255) DEFAULT NULL,
    `noOfBeds` smallint NOT NULL DEFAULT '1',
    `roomType` char(45) DEFAULT NULL,
    `createdBy` int NOT NULL,
    `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedBy` int DEFAULT NULL,
    `updatedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

CREATE TABLE `booking_app`.`room` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `hotelId` INT NOT NULL,
    `roomDetailid` INT NOT NULL,
    `price` FLOAT NOT NULL,
    `status` CHAR(45) NULL DEFAULT 'available',
    `createdBy` INT NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedBy` INT NULL,
    `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    INDEX `f_idx` (`hotelId` ASC) VISIBLE,
    INDEX `room_roomDetail_roomDetailId_idx` (`roomDetailid` ASC) VISIBLE,
    CONSTRAINT `room_hotel_hotelId` FOREIGN KEY (`hotelId`) REFERENCES `booking_app`.`hotel` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `room_roomDetail_roomDetailId` FOREIGN KEY (`roomDetailid`) REFERENCES `booking_app`.`roomDetail` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE `booking_app`.`order` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `customerId` INT NOT NULL,
    `hotelId` INT NOT NULL,
    `checkInDate` DATETIME NOT NULL,
    `checkOutDate` DATETIME NOT NULL,
    `status` CHAR(45) NOT NULL DEFAULT 'created',
    `amount` FLOAT NOT NULL,
    `createdBy` INT NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedBy` INT NULL,
    `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    INDEX `order_user_customerId_idx` (`customerId` ASC) VISIBLE,
    INDEX `order_hotel_hotelId_idx` (`hotelId` ASC) VISIBLE,
    CONSTRAINT `order_user_customerId` FOREIGN KEY (`customerId`) REFERENCES `booking_app`.`user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `order_hotel_hotelId` FOREIGN KEY (`hotelId`) REFERENCES `booking_app`.`hotel` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE `booking_app`.`roomOrder` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `orderId` INT NULL,
    `roomId` INT NOT NULL,
    `review` VARCHAR(255) NULL,
    `rating` SMALLINT(4) NULL DEFAULT NULL,
    `createdBy` INT NOT NULL,
    `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedBy` INT NULL,
    `updatedAT` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    INDEX `roomOrder_order_orderId_idx` (`orderId` ASC) VISIBLE,
    INDEX `roomOrder_room_roomId_idx` (`roomId` ASC) VISIBLE,
    CONSTRAINT `roomOrder_order_orderId` FOREIGN KEY (`orderId`) REFERENCES `booking_app`.`order` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `roomOrder_room_roomId` FOREIGN KEY (`roomId`) REFERENCES `booking_app`.`room` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE `booking_app`.`payment` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `orderId` INT NOT NULL,
    `paymentMethod` CHAR(45) NOT NULL,
    `amountPaid` FLOAT NULL,
    `status` CHAR(45) NULL,
    `createdBy` INT NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedBy` INT NULL,
    `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    INDEX `payment_order_orderId_idx` (`orderId` ASC) VISIBLE,
    CONSTRAINT `payment_order_orderId` FOREIGN KEY (`orderId`) REFERENCES `booking_app`.`order` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);