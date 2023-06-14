# Assignment #3 - Create your own Middleware for ShopApp

You'll have to write 3 new middlewares:

* Authorization middleware to validate certain requests to the application.
  * Apply this middleware to these requests:
    * Create an Order with Products
    * Create a Payment for an Order
* Admin Authorization middleware, where you validate a request by checking whether the auth token is valid, AND belongs to a Admin type user.
  * Apply this middleware to these requests:
    * Create/Update a Product
    * Create/Update a Store
* Error handling middleware, where it catches any unhandled errors in the application, and displays a softer message as a response detailing what the error was.
  * This should be a GLOBAL middleware, where it is applied to all the requests.

## How to run this application?

In the terminal first run:
`npm install`

To run the application:
`npm start`
