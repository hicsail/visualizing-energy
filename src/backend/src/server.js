let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
const createError = require("http-errors");
require("dotenv").config();

const TAG = "server.js";
const contentRoute = require("./routes/content.route");
const BASE_ROUTE = "/content";

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
app.use(BASE_ROUTE, contentRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(TAG, "Connected to port " + port);
});

// handle errors
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
