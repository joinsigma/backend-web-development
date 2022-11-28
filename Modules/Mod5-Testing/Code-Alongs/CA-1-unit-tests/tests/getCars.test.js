import { getCarById, getAllCars } from "../src/getCars.js";

describe("should test getCarById", () => {
  test("if carId is 1", () => {
    const car = getCarById(1);
    expect(car.id).toBe(1);
  });
  test("if carId is null", () => {
    const car = getCarById(null);
    expect(car).toBeUndefined();
  });
});

describe("should test getAllCars", () => {
  test("return all cars", () => {
    const allCarsExpected = [
      {
        id: 1,
        model: "Camry",
        make: "Toyota",
      },
      {
        id: 2,
        model: "M5",
        make: "BMW",
      },
      {
        id: 3,
        model: "Model S",
        make: "Tesla",
      },
    ];
    const allCars = getAllCars();
    // Baseline method of testing an object/array
    expect(allCars).toBeDefined();
    // This would be better
    expect(allCars).toEqual(expect.arrayContaining(allCarsExpected));
    // More specific way of testing
    allCars.forEach((car) => {
      expect(car).toHaveProperty("id");
    });
  });
});
