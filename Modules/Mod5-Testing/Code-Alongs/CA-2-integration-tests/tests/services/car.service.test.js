import { startDbConnection, getConnection } from "../../src/models/index.js";
import carService from "../../src/services/car.service.js";

describe("should test car.service", () => {
  beforeAll(() => {
    startDbConnection(
      process.env.DB_HOST,
      process.env.DB_USER,
      process.env.DB_PASS
    );
  });
  it("return getAllCars", async () => {
    const data = await carService.getAllCars();
    expect(data).toBeDefined();
    expect(data.length).toBeGreaterThanOrEqual(0);
  });
  it("return getCarById", async () => {
    const data = await carService.getCarById(1);
    expect(data).toBeDefined();
    expect(data.id).toEqual(1);
  });
});
