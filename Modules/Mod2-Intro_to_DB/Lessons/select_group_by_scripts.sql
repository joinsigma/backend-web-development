-- SELECT ALL CAR MODEL COUNTS
SELECT
    carModelId,
    COUNT(*)
FROM
    `car_app`.`car`
GROUP BY
    carModelId

-- SELECT ALL CAR MODEL COUNTS, JOIN to show CarModel name
SELECT
    cm.name,
    COUNT(c.*)
FROM
    `car_app`.`car` c
    INNER JOIN `car_app`.`carModel` cm ON cm.id = c.carModelId
GROUP BY
    c.id

