# Assignment #2 - Use Auth0 in ShopApp

For this assignment, you'll be integrating Auth0 into your ShopApp application:

* Create a new Auth0 account, and create a development tenant on Auth0, for the ShopApp application.
* Create a /register endpoint that would create the user on the Auth0 database, and returns a Json Web Token.
  * Use the user's email as the username for Auth0
* Create a /login that will call Auth0 to evaluate the username/password combination, and return a JWT in the response.

## How to run this application?

In the terminal first run:
`npm install`

To run the application:
`npm start`
