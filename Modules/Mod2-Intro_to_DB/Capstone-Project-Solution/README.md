# Module Capstone Project ~ BookingApp

For this Module Capstone project, you guys will be creating an Entity Relationship Diagram, and then creating the tables in a RDMS database. You will have to insert some mock data against those tables.

After creating the tables in RDMS and inserting mock data, write SELECT queries for these specific cases:

* Get all Hotels, and it's respective amenities.
* Get all successful Payments made.
* Get all Bookings made by 1 random customers.
* Get the average ratings of each room in a Hotel.
* Get the number of failed Payments made by each Customer.
* Get all Hotels that have more than RM1500 in total Bookings made.

Finally, create a **NoSQL** table, to replace a certain table or tables in the RDMS, and insert mock data to illustrate why NoSQL can be used for those tables. Additionally, you have to come up with an explanation on why you chose those tables to replace.

## Submission

For your ERD, upload your pdf of your LucidChart ERD here: <https://github.com/joinsigma/backend-web-development/tree/main/Modules/Mod2-Intro_to_DB/Capstone-Project>

Commit your CREATE TABLE, ALTER TABLE, DROP TABLE, INSERT, and SELECT queries here: <https://github.com/joinsigma/backend-web-development/blob/main/Modules/Mod2-Intro_to_DB/Capstone-Project/initialize_tables.sql>..

For your NoSQL table, export your Collection as JSON file and upload it here: <https://github.com/joinsigma/backend-web-development/tree/main/Modules/Mod2-Intro_to_DB/Capstone-Project>

## Case Study

I want to start a company to help people book hotels through a website. I’ve already a list of hotels that would be excited to have this service, as it would greatly help their business. I need to keep certain information of each hotel of course, the hotel name, address, certain amenities (i.e. WiFi, pool, etc), checkin and checkout time, star rating out of 5, and overall rating of the hotel by the customer, and the hotel’s room details.

For each room, it would need the name, a description of the room, price of the room per night, number of guests it can hold. Each customer, will be able to making a booking of more than one room at a time, we’ll need their check-in date, check-out date, the total amount to be owed for the booking, the customer is able to leave a review per room they made in the booking, this will later affect the overall rating of the hotel.

We also need to keep track of the customer payment of each booking, for this we’ll need the payment method, payment amount, and the status of each payment. Finally, for each customer, we’ll need their name, login details, passport and passport validity, additionally, admin users of the application will be the one's to control the data of the application.

## Solution ~ Explanation

I have included a solution that has 5 records in the exported *json* file.

I picked both the Room and RoomDetail to be replaced by a NoSQL table, because using the properties of a NoSQL table, I am able to add new fields to the describe the room with new attributes such as `hasIndoorPool`, `noOfRooms`, `containsSnacks`, `containsAlcohol`. These new fields describe the room, but they are specific to each room.
