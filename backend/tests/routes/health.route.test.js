let supertest = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
let startServer = require("../../src/server");
const { app, server } = startServer();
let mongoose = require("mongoose");
const HEALTH_ROUTE_PATH = "/health/";

describe("/health", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
    server.close();
  });

  it("get request should return `ok` and status code 200", async () => {
    const getRequestResponse = await supertest(app).get(HEALTH_ROUTE_PATH);

    expect(getRequestResponse.statusCode).toBe(200);
    expect(getRequestResponse.body.status).toBe("ok");
  });
});
