import { jest } from "@jest/globals";
import request from "supertest";
import express from "express";
import carRouter from "../../src/routes/car.route.js";

import carService from "../../src/services/car.service.js";
jest.mock("../../src/services/car.service.js");

describe("should test carController", () => {
  let server, agent;

  beforeAll((done) => {
    const app = express();
    app.use(express.urlencoded({ extended: false }));
    app.use("/cars", carRouter);
    server = app.listen(4000, (err) => {
      if (err) return done(err);

      agent = request.agent(server);
      done();
    });
  });

  afterAll(() => {
    server.close();
  });

  it("should getCars", async () => {
    const returnCars = [
      {
        id: 1,
        make: "Toyata",
      },
      {
        id: 1,
        make: "Honda",
      },
    ];
    carService.getAllCars = jest.fn();
    carService.getAllCars.mockResolvedValue(returnCars);

    const response = await agent
      .get("/cars")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response).toBeDefined();
    expect(response.body).toEqual({ data: returnCars });
  });

  it("should getCarById", async () => {
    const returnCar = {
      id: 1,
      make: "Toyata",
    };
    carService.getCarById = jest.fn();
    carService.getCarById.mockResolvedValue(returnCar);

    const response = await agent
      .get("/cars/1")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response).toBeDefined();
    expect(response.body).toEqual({ data: returnCar });
    expect(response.body.data).toHaveProperty("id");
  });
});
