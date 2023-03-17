-- SELECT ALL
SELECT
    *
FROM
    `car_app`.`user`;

-- SELECT BY SPECIFIC FIELDS
SELECT
    id, email
FROM
    `car_app`.`user`;

-- SELECT WHERE CLAUSE, id == 1
SELECT
    *
FROM
    `car_app`.`user`
WHERE
    id = 1;

-- SELECT WHERE CLAUSE, firstName is Pavi
SELECT
    *
FROM
    `car_app`.`user`
WHERE
    firstName LIKE 'Pavi';

-- SELECT WHERE CLAUSE, email is Gmail
SELECT
    *
FROM
    `car_app`.`user`
WHERE
    email LIKE '%@gmail.com';

-- SELECT INNER JOIN CLAUSE, get all user details with their car lot
SELECT
    cl.*, u.firstName, u.lastName
FROM
    `car_app`.`car_lot` cl
    INNER JOIN `car_app`.`user` u ON u.id = cl.ownerId