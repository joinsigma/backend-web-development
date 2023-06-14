import { jest } from "@jest/globals";
import request from "supertest";
import express from "express";
import userRouter from "../../src/routes/user.route.js";

import userService from "../../src/services/user.service.js";
jest.mock("../../src/services/user.service.js");

describe("should test userController", () => {
  let server, agent;

  beforeAll((done) => {
    const app = express();
    app.use(express.urlencoded({ extended: false }));
    app.use("/users", userRouter);
    // Creating mock server
    server = app.listen(4000, (err) => {
      if (err) return done(err);

      agent = request.agent(server);
      done();
    });
  });

  afterAll(() => {
    // Closing mock server after all test cases are run
    server.close();
  });

  it("should getAllUsers", async () => {
    const returnAllUsers = [
      {
        id: 1,
        firstName: "Rafael",
        lastName: "Nadal",
      },
      {
        id: 2,
        firstName: "Iga",
        lastName: "Swiantek",
      },
    ];
    userService.getAllUsers = jest.fn();
    userService.getAllUsers.mockResolvedValue(returnAllUsers);

    const response = await agent
      .get("/users")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response).toBeDefined();
    expect(response.body).toEqual({ data: returnAllUsers });
  });

  it("should getUserById", async () => {
    const singleUser = {
      id: 1,
      firstName: "Rafael",
      lastName: "Nadal",
    };
    userService.getUserById = jest.fn();
    userService.getUserById.mockResolvedValue(singleUser);

    const response = await agent
      .get("/users/1")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response).toBeDefined();
    expect(response.body).toEqual({ data: singleUser });
    expect(response.body.data).toHaveProperty("id");
  });

  it("should throw an error", async () => {
    const response = await agent
      .get("/users/random/generated")
      .expect(404);

    expect(response).toBeDefined();
  });
});