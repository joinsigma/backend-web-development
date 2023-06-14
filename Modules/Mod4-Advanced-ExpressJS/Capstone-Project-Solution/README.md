# Module Capstone Project ~ Enhance BookingApp

For this Module Capstone Project, we will be upgrading the BookingApp that you have created.

You will have to:

* Create a register user endpoints, to create a new user with a password, and save that user in the database with a hashed password.
* Create a login endpoint.
* Create 3 middlewares
  * Authorization middleware to validate certain requests to the application.
  * Apply this middleware to these requests:
    * Create/Update a Booking of a Hotel room.
    * Create/Update a Payment for a Hotel Booking.
    * Create/Update a Rating for Hotel.
  * Admin Authorization middleware, where you validate a request by checking whether the auth token is valid, AND belongs to a Admin type user.
    * Apply this middleware to these requests:
      * Create/Update a Hotel and Hotel's details.
      * Create/Update a Hotel Room.
  * Error handling middleware, where it catches any unhandled errors in the application, and displays a softer message as a response detailing what the error was.
    * This should be a GLOBAL middleware, where it is applied to all the requests.

## How to run this application?

In the terminal first run:
`npm install`

To run the application:
`npm start`
