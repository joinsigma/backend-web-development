import { jest } from "@jest/globals";
import request from "supertest";
import express from "express";
import carController from "../../src/controllers/car.controller";
import carRouter from "../../src/routes/car.route.js";

import carService from "../../src/services/car.service";
jest.mock("../../src/services/car.service.js");

describe("test carController", () => {
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

  it("should getCarById", async () => {
    const returnCar = {
      id: 1,
      make: "Car",
    };
    carService.getCarById = jest.fn();
    carService.getCarById.mockResolvedValue(returnCar);

    const response = await agent
      .get("/cars/1")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response).toBeDefined();
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

    console.log(response.body);
    expect(response).toBeDefined();
    expect(response.body).toEqual({ data: returnCars });
  });

  afterAll(() => {
    server.close();
  });
});
