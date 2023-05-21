# Assignment #3 ~ Creating a NoSQL database for ShopApp

Create a NoSQL table to replace a table (or two) in the RDMS table to properly represent an entity within the ShopApp.

Add at least 15 records to this new table, that makes use of the advantages of a NoSQL database that you have learned in the previous code along.

Prepare an explanation of why you chose the table(s) to replace in the RDMS.

## Explanation

I have included a solution that has 5 records in the exported *json* file.

I picked both the Product and the ProductDetail to be replaced by a NoSQL table, because using the properties of a NoSQL table, it allows to have a flexibility of adding multiple fields if required to redefine a product. For e.g. I have used fields such as: `size`, `size_variant`, `isNew`, and `isDangerous` to describe the record in the database.
