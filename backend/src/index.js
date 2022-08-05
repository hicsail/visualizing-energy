let mongoose = require("mongoose");
require("dotenv").config();
let startServer = require("./server");

const TAG = "server.js";

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

startServer();
