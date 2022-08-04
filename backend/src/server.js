let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
const createError = require("http-errors");
require("dotenv").config();

const TAG = "server.js";
const contentRoute = require("./routes/content.route");
const CONTENT_ROUTE_PATH = "/content";

//check for required environment variable
if (
  !process.env.MONGO_DB_HOST ||
  !process.env.MONGO_DB_NAME ||
  !process.env.WRITE_ACCESS_KEY
) {
  console.log(
    TAG,
    "At least one required environment variable (MONGO_DB_HOST, MONGO_DB_NAME and WRITE_ACCESS_KEY) is not set. Exiting..."
  );
  process.exit(1);
}

// connect mongoDB database
const DATABASE_PATH =
  "mongodb://" + process.env.MONGO_DB_HOST + "/" + process.env.MONGO_DB_NAME;

mongoose.Promise = global.Promise;
mongoose
  .connect(DATABASE_PATH, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log(TAG, "Database sucessfully connected!");
    },
    (error) => {
      console.log(TAG, "Could not connect to database : " + error);
      process.exit(1);
    }
  );

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
