# Programme Capstone Project

This will be a Super App clone application.

## ERD and Database

You will start by creating an Entity Relationship Diagram, and then creating the tables in a RDMS database. You will have to insert some mock data against those tables.

After creating the tables in RDMS and inserting mock data, write SELECT queries for these specific cases:

* Get all Restaurants, and it's the Products that they serve.
* Get all Ride Drivers, and their corresponding Details.
* Get all successful Payments made, and the order details.
* Get all Orders by a Customer.
* Get all Orders by a Customer group by order type
* Get order counts by order type.
* Get the most popular Restaurant
* Restaurant with most amount of Food Delivery orders
* Restaurant with the highest income earned from Food Delivery orders.
* Get the most popular Driver
* Driver with the most accepted Ride Orders.
* Driver who has made the most money from Ride Orders.

## Creating the service

Under <https://github.com/joinsigma/backend-web-development/tree/main/ProgrammeCapstone>, you must:

* Create valid Routes, Controllers, Services, Validation and Models for the application.
* The application must have the ability to:
* GET endpoints for all the tables
* GET All
* GET By PK/Id
* Create/Update a Restaurant.
* Add Food Products to the restaurant
* Edit each Food Product
* Create/Update a Driver and the driver details
* Create/Update an Order
* Create/Update a Payment for an Order.
* DELETE By Id endpoints for all the tables.
* Authentication endpoints
  * Create a register user endpoints, to create a new user with a password, and save that user in the database with a hashed password.
  * Create a login endpoint.
  * Create 3 middlewares
* Authorization middleware to validate certain requests to the application.
* Apply this middleware to these requests:
  * Create/Update an Order
  * Create/Update a Payment for an Order.
* Admin Authorization middleware, where you validate a request by checking whether the auth token is valid, AND belongs to a Admin type user.
* Apply this middleware to these requests:
  * Create/Update a Restaurant.
  * Add Food Products to the restaurant
  * Edit each Food Product
  * Create/Update a Driver and the driver details
* Error handling middleware, where it catches any unhandled errors in the application, and displays a softer message as a response detailing what the error was.
* This should be a GLOBAL middleware, where it is applied to all the requests.
* Make sure to use validation for each endpoint where possible.

## Adding Testing

You should add:

* Unit testing to where it's applicable
* Integration testing
  * All the methods in the services
  * All the methods in the controllers
* Try to get at as close to 100% test coverage for the entire project. If you are unable to get 100%, state what file or files you are unable to test in the Github issue you have to create for this project.

Good luck guys!!
