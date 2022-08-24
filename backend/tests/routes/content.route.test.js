let supertest = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
let startServer = require("../../src/server");
const { app, server } = startServer();
let mongoose = require("mongoose");
const CONTENT_ROUTE_PATH = "/content/";

describe("/content", () => {
  const sampleWritePayload = {
    stringifiedPage: "page information",
  };
  const sampleWriteKey = Buffer.from("secretKey").toString("base64");

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

  describe("read routes", () => {
    var postRequestResponse;
    beforeAll(async () => {
      postRequestResponse = await supertest(app)
        .post(CONTENT_ROUTE_PATH)
        .set("Authorization", sampleWriteKey)
        .send(sampleWritePayload);
    });

    it("get request should return newly created content and status code 200", async () => {
      const newlyCreatedContentId = postRequestResponse.body.id;
      const getRequestResponse = await supertest(app).get(
        CONTENT_ROUTE_PATH + newlyCreatedContentId
      );

      expect(getRequestResponse.statusCode).toBe(200);
      expect(getRequestResponse.body.stringifiedPage).toBe(
        sampleWritePayload.stringifiedPage
      );
    });

    it("`get-ids` request should return ids of newly created content and status code 200", async () => {
      const newlyCreatedContentId = postRequestResponse.body.id;
      const getRequestResponse = await supertest(app).get(
        CONTENT_ROUTE_PATH + `ids`
      );

      expect(getRequestResponse.statusCode).toBe(200);
      expect(getRequestResponse.body).toEqual([newlyCreatedContentId]);
    });
  });

  describe("write routes", () => {
    const sampleId = "62e3ff8ec81f515754ca546d";
    describe("with no write access", () => {
      it("post request should return error with status code 401 ", async () => {
        const postRequestResponse = await supertest(app).post(
          CONTENT_ROUTE_PATH,
          sampleWritePayload
        );

        expect(postRequestResponse.statusCode).toBe(401);
        expect(postRequestResponse.unauthorized).toBe(true);
      });

      it("delete request should return error with status code 401", async () => {
        const deleteRequestResponse = await supertest(app).delete(
          CONTENT_ROUTE_PATH + sampleId,
          sampleWritePayload
        );

        expect(deleteRequestResponse.statusCode).toBe(401);
        expect(deleteRequestResponse.unauthorized).toBe(true);
      });
    });

    describe("with write access", () => {
      it("post request should return id of newly content and status code 200", async () => {
        const postRequestResponse = await supertest(app)
          .post(CONTENT_ROUTE_PATH)
          .set("Authorization", sampleWriteKey)
          .send(sampleWritePayload);

        expect(postRequestResponse.statusCode).toBe(200);
        expect(postRequestResponse.body.id).toBeDefined();
      });

      it("update request should succeed and return status code 200 ", async () => {
        const postRequestResponse = await supertest(app)
          .post(CONTENT_ROUTE_PATH)
          .set("Authorization", sampleWriteKey)
          .send(sampleWritePayload);

        sampleWritePayload.stringifiedPage = "updated page";
        const putRequestResponse = await supertest(app)
          .put(CONTENT_ROUTE_PATH + postRequestResponse.body.id)
          .set("Authorization", sampleWriteKey)
          .send(sampleWritePayload);

        expect(putRequestResponse.statusCode).toBe(200);
        expect(putRequestResponse.body.stringifiedPage).toBe(
          sampleWritePayload.stringifiedPage
        );
      });

      it("delete request should succeed and return status code 200", async () => {
        const postRequestResponse = await supertest(app)
          .post(CONTENT_ROUTE_PATH)
          .set("Authorization", sampleWriteKey)
          .send(sampleWritePayload);

        const newlyCreatedContentId = postRequestResponse.body.id;

        const deleteRequestResponse = await supertest(app)
          .delete(CONTENT_ROUTE_PATH + newlyCreatedContentId)
          .set("Authorization", sampleWriteKey);

        expect(deleteRequestResponse.statusCode).toBe(200);
      });

      it("post request with ill-formed payload should return error and status code 400", async () => {
        const sampleBadWritePayload = {
          stringifiedPa: "page information",
        };
        const postRequestResponse = await supertest(app)
          .post(CONTENT_ROUTE_PATH)
          .set("Authorization", sampleWriteKey)
          .send(sampleBadWritePayload);

        expect(postRequestResponse.statusCode).toBe(400);
        expect(postRequestResponse.badRequest).toBe(true);
      });
    });
  });
});
