(express = require("express")), (router = express.Router());

const Content = require("../models/Content");
const { verifyWriteAccess, verifyWritePayload } = require("../utils");
const UNKNOWN_ERROR = "Internal server error";
const validateWriteRequest = [verifyWriteAccess, verifyWritePayload];

//health check
router.route("/").get(async (req, res) => {
  try {
    res.send("ok");
  } catch (error) {
    res.status(500);
    res.send({ error: UNKNOWN_ERROR });
  }
});

// create content
router.route("/").post(validateWriteRequest, async (req, res) => {
  try {
    const content = new Content({
      stringifiedPage: req.body.stringifiedPage,
    });
    await content.save();
    res.send({ id: content._id });
  } catch (error) {
    res.status(500);
    res.send({ error: UNKNOWN_ERROR });
  }
});

//read all ids
router.route("/ids").get(async (req, res) => {
  try {
    const contentIds = await Content.find({
      program: { $in: ["_id"] },
    }).distinct("_id");
    res.send(contentIds);
  } catch (error) {
    res.status(500);
    res.send({ error: UNKNOWN_ERROR });
  }
});

// read content
router.route("/:id").get(async (req, res) => {
  try {
    const content = await Content.findOne({ _id: req.params.id });
    if (content == null) {
      res.status(404);
      res.send({ error: "content with specified id doesn't exist" });
    } else {
      res.send(content);
    }
  } catch (error) {
    res.status(500);
    res.send({ error: UNKNOWN_ERROR });
  }
});

// update content
router.route("/:id").put(validateWriteRequest, async (req, res) => {
  try {
    const updatedContent = {
      _id: req.params.id,
      stringifiedPage: req.body.stringifiedPage,
    };
    const contentQuery = await Content.findOneAndUpdate();
    await contentQuery.save();
    res.send(updatedContent);
  } catch (error) {
    res.status(500);
    res.send({ error: UNKNOWN_ERROR });
  }
});

// delete content
router.route("/:id").delete(verifyWriteAccess, async (req, res) => {
  try {
    await Content.findByIdAndRemove({
      _id: req.params.id,
    });
    res.send({ id: req.params.id });
  } catch (error) {
    res.status(500);
    res.send({ error: UNKNOWN_ERROR });
  }
});

module.exports = router;
