import { jest } from "@jest/globals";
import carService from "../../src/services/car.service.js";
import {
  startDbConnection,
  getConnection,
  closeConnection,
} from "../../src/models/index.js";

test("when getAllCars succeeds", async () => {
  startDbConnection("localhost", "root", "sigma12345", "carsome_clone_test");

  const data = await carService.getAllCars();
  expect(data).toBeDefined();
});
