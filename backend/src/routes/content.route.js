(express = require("express")), (router = express.Router());

const Content = require("../models/Content");
const {
  verifyWriteAccess,
  verifyWritePayload,
  handleUnknownError,
} = require("../utils");
const validateWriteRequest = [verifyWriteAccess, verifyWritePayload];

//health check
router.route("/").get(async (req, res) => {
  try {
    res.send("ok");
  } catch (error) {
    handleUnknownError(res, error);
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
    handleUnknownError(res, error);
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
    handleUnknownError(res, error);
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
    handleUnknownError(res, error);
  }
});

// update content
router.route("/:id").put(validateWriteRequest, async (req, res) => {
  try {
    const content = await Content.findOne({ _id: req.params.id });
    if (content == null) {
      res.status(404);
      res.send({ error: "content with specified id doesn't exist" });
    } else {
      content.stringifiedPage = req.body.stringifiedPage;
      const updateResults = await content.save();
      res.send(updateResults);
    }
  } catch (error) {
    handleUnknownError(res, error);
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
    handleUnknownError(res, error);
  }
});

module.exports = router;
