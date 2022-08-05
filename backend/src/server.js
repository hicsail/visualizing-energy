let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
const createError = require("http-errors");
require("dotenv").config();

const TAG = "server.js";
const contentRoute = require("./routes/content.route");
const CONTENT_ROUTE_PATH = "/content";

function startServer() {
  // start server
  const app = express();
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
  app.use(CONTENT_ROUTE_PATH, contentRoute);

  const port = process.env.PORT || 4000;
  const server = app.listen(port, () => {
    console.log(TAG, "Server listening at port " + port);
  });

  // handle server errors
  app.use((req, res, next) => {
    next(createError(404));
  });

  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });

  return app;
}
module.exports = startServer;
