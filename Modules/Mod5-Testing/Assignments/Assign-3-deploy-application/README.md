# Assignment 1 - Create Basic Authentication endpoints for Shopee-clone
* Create/Update endpoints:
    * POST /login
        * To allow a user to login using email or username and password.
        * Validate email using joi.
    * POST /register
        * Update the create user endpoint to a new register endpoint.
        * Create/Register a new user, and save the user with a hashed password in the database.
        * Create proper validation for the registration payload.
          * Password should be min 8 and max 16 characters
          * Password should have at least 1 alphabet, 1 uppercase alphabet, and 1 number.