const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MONGO_DB_COLLECTION_NAME = "visualizations";

let contentSchema = new Schema(
  {
    stringifiedPage: {
      type: String,
    },
  },
  {
    collection: MONGO_DB_COLLECTION_NAME,
  }
);

module.exports = mongoose.model("ContentSchema", contentSchema);
