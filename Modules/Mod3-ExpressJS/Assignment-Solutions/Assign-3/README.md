# Assignment 3 - CRUD Endpoints for ShopApp

* Create POST methods to:
  * Create a new Product, with a Product Description
  * Create a new Store
  * Create a new Order
  * Create a new Payment
* Create PUT methods to:
  * Update a Store
  * Update a Product
    * Product Description
    * Price
    * Quantity
  * Update the Products in an Order
  * Update a Payment for an Order
    * Status
* Create DELETE methods to:
  * Delete a Product
    * If the Product exists in a store, it should not be deleted.
  * Delete a Store
  * Delete an Order
* The POST & PUT methods should have validation for the request bodies.
  * Each attribute should be validated against the DataType in MySQL for its corresponding table.

## How to run this application?

In the terminal first run:
`npm install`

To run the application:
`npm start`
