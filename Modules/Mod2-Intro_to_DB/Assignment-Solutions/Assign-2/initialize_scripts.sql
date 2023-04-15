CREATE DATABASE IF NOT EXISTS shop_app;

-- SCRIPTS go here
-- FOLLOW THIS NAMING CONVENTION
--   - TABLE NAMES - Singlular, snake_case
--   - COLUMN NAMES - camelCase
-- DROP DATABASE shopee_clone;
-- DROP TABLE `shop_app`.`user`;
CREATE TABLE IF NOT EXISTS `shop_app`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NULL,
  `email` VARCHAR(90) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `type` CHAR(45) NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` INT NULL,
  `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

CREATE TABLE IF NOT EXISTS `shop_app`.`store` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(90) NOT NULL,
  `ownerId` int NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdBy` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` int DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `store_user_ownerId_idx` (`ownerId`),
  CONSTRAINT `store_user_ownerId` FOREIGN KEY (`ownerId`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `shop_app`.`productDetail` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NULL,
  `variant` CHAR(45) NOT NULL,
  `createdBy` INT NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` INT NULL,
  `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE `shop_app`.`product` (
  `id` INT NOT NULL,
  `productDetailId` INT NOT NULL,
  `storeId` INT NOT NULL,
  `price` DOUBLE NOT NULL,
  `quantity` INT NULL,
  `status` CHAR(45) NULL,
  `createdBy` INT NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` INT NULL,
  `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `product_store_storeId_idx` (`storeId` ASC) VISIBLE,
  INDEX `product_productDetail_productDetailId_idx` (`productDetailId` ASC) VISIBLE,
  CONSTRAINT `product_store_storeId` FOREIGN KEY (`storeId`) REFERENCES `shop_app`.`store` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `product_productDetail_productDetailId` FOREIGN KEY (`productDetailId`) REFERENCES `shop_app`.`productDetail` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE `shop_app`.`order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `buyerId` INT NOT NULL,
  `storeId` INT NULL,
  `deliveryDate` DATETIME NULL,
  `status` CHAR(45) NULL DEFAULT 'created',
  `createdBy` INT NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` INT NULL,
  `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `order_store_storeId_idx` (`storeId` ASC) VISIBLE,
  INDEX `order_user_buyerId_idx` (`buyerId` ASC) VISIBLE,
  CONSTRAINT `order_store_storeId` FOREIGN KEY (`storeId`) REFERENCES `shop_app`.`store` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `order_user_buyerId` FOREIGN KEY (`buyerId`) REFERENCES `shop_app`.`user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE `shop_app`.`productOrder` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productId` INT NOT NULL,
  `orderId` INT NOT NULL,
  `quantity` INT NULL DEFAULT 1,
  `review` VARCHAR(255) NULL,
  `rating` TINYINT(4) NULL,
  `createdBy` INT NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` INT NULL,
  `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `productOrder_product_productId_idx` (`productId` ASC) VISIBLE,
  INDEX `productOrder_order_orderId_idx` (`orderId` ASC) VISIBLE,
  CONSTRAINT `productOrder_product_productId` FOREIGN KEY (`productId`) REFERENCES `shop_app`.`product` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `productOrder_order_orderId` FOREIGN KEY (`orderId`) REFERENCES `shop_app`.`order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `shop_app`.`payment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `orderId` INT NOT NULL,
  `paymentMethod` CHAR(45) NOT NULL,
  `amountPaid` DOUBLE NOT NULL,
  `status` CHAR(45) NULL DEFAULT 'unpaid',
  `createdBy` INT NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` INT NULL,
  `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `payment_order_orderId_idx` (`orderId` ASC) VISIBLE,
  CONSTRAINT `payment_order_orderId` FOREIGN KEY (`orderId`) REFERENCES `shop_app`.`order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO
  `shop_app`.`user` (firstName, lastName, email, password, type)
VALUES
  (
    'John',
    'Doe',
    'john.doe@example.com',
    'pass123',
    'customer'
  );

INSERT INTO
  `shop_app`.`user` (firstName, lastName, email, password, type)
VALUES
  (
    'Jane',
    'Smith',
    'jane.smith@example.com',
    'pwd456',
    'admin'
  );

INSERT INTO
  `shop_app`.`user` (firstName, lastName, email, password, type)
VALUES
  (
    'Bob',
    'Johnson',
    'bob.johnson@example.com',
    'password',
    'customer'
  );

INSERT INTO
  `shop_app`.`user` (firstName, lastName, email, password, type)
VALUES
  (
    'Samantha',
    'Lee',
    'samantha.lee@example.com',
    'abc123',
    'owner'
  );

INSERT INTO
  `shop_app`.`user` (firstName, lastName, email, password, type)
VALUES
  (
    'Alex',
    'Wong',
    'alex.wong@example.com',
    'passw0rd',
    'customer'
  );

INSERT INTO `shop_app`.`store` (`id`, `name`, `ownerId`, `address`, `createdBy`) VALUES ('1', 'A Convient Store', '4', 'Online Shop', '2');

-- Insert script for productDetail table
INSERT INTO
  `shop_app`.`productDetail` (`name`, `description`, `variant`, `createdBy`)
VALUES
  (
    'Shirt',
    'A comfortable and stylish shirt for everyday wear',
    'Clothing',
    4
  ),
  (
    'Jeans',
    'A durable pair of jeans for casual wear',
    'Clothing',
    4
  ),
  (
    'Sneakers',
    'A stylish and comfortable pair of sneakers',
    'Shoes',
    4
  ),
  (
    'Sunglasses',
    'Stylish sunglasses for sunny days',
    'Glasses',
    4
  ),
  (
    'Tennis Racket',
    'A high-quality tennis racket, weighed at 300g',
    'Sports Equipment',
    4
  ),
  (
    'Backpack',
    'A durable and stylish backpack for everyday use',
    'Storage/Suitcase',
    4
  );

-- Insert script for product table
INSERT INTO
  `shop_app`.`product` (
    `id`,
    `productDetailId`,
    `storeId`,
    `price`,
    `quantity`,
    `status`,
    `createdBy`
  )
VALUES
  (1, 1, 1, 29.99, 100, 'In stock', 4),
  (2, 2, 1, 49.99, 50, 'Out of stock', 4),
  (3, 3, 1, 79.99, 75, 'In stock', 4),
  (4, 4, 1, 99.99, 25, 'In stock', 4),
  (5, 5, 1, 199.99, 10, 'In stock', 4),
  (6, 6, 1, 149.99, 20, 'Out of stock', 4);

-- Get all the Products that are “Out of Stock”
SELECT
  *
FROM
  product
WHERE
  status LIKE 'Out of stock'
  OR quantity = 0;

-- Get all Payments that have the status “payment_failed”
SELECT
  *
FROM
  payment
WHERE
  status LIKE 'payment_failed';

-- Get all Products with their respective Product descriptions
SELECT
  p.productName,
  pd.productDescription
FROM
  product p
  INNER JOIN productDetail pd ON pd.id = p.productDetailId;

-- Get all Users that have bought products
SELECT
  DISTINCT u.*
FROM
  user u
  INNER JOIN order o ON o.buyerId = u.id -- Get the number of Products bought per User
SELECT
  u.user_id,
  COUNT(po.productId) AS total_products_bought
FROM
  user u
  INNER JOIN order o ON o.buyerId = u.id
  INNER JOIN productOrder po ON po.orderId = o.id
GROUP BY
  u.user_id;

-- Get the amount sold per Product
SELECT
  p.id,
  SUM(po.quantity) AS total_sold
FROM
  shop_app.product p
  INNER JOIN shop_app.productOrder po ON po.productId = p.id
GROUP BY
  p.id;

-- Get the number of Products per Store
SELECT
  s.id,
  s.name,
  COUNT(p.id) AS total_sold
FROM
  shop_app.store s
  INNER JOIN shop_app.product p ON p.storeId = s.id
GROUP BY
  s.id,
  s.name;

-- Get the number of unique Products bought by User
-- Get the number of Products bought per User
SELECT
  DISTINCT u.id,
  po.productId,
  COUNT(po.productId) AS total_products_bought
FROM
  user u
  INNER JOIN order o ON o.buyerId = u.id
  INNER JOIN productOrder po ON po.orderId = o.id
GROUP BY
  u.id,
  po.productId;

-- Get the number of Products bought by other Store Owner
SELECT
  u.id,
  COUNT(po.productId) AS total_products_bought
FROM
  user u
  INNER JOIN order o ON o.buyerId = u.id
  INNER JOIN productOrder po ON po.orderId = o.id
WHERE
  u.type LIKE 'StoreOwner'
GROUP BY
  u.id,
  po.productId;