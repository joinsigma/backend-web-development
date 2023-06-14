import { startDbConnection } from "../../src/models/index.js";
import userService from "../../src/services/user.service.js";

describe("should test user.service", () => {
  beforeAll(() => {
    startDbConnection(
      process.env.DB_HOST,
      process.env.DB_USER,
      process.env.DB_PASS
    );
  });
  it("return all users in db", async () => {
    const data = await userService.getAllUsers();
    expect(data).toBeDefined();
    expect(data.length).toBeGreaterThanOrEqual(0);
  });
  it("return user with id 1", async () => {
    const data = await userService.getUserById(1);
    expect(data).toBeDefined();
    expect(data.id).toEqual(1);
  });
});
