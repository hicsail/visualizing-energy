(express = require("express")), (router = express.Router());

const Content = require("../models/Content");

//TODO ensure routes fail gracefully

// create content
router.route("/").post(async (req, res) => {
  const content = new Content({
    stringifiedPage: req.body.stringifiedPage,
  });
  await content.save();
  res.send({ id: content._id });
});

// read content
router.route("/:id").get(async (req, res) => {
  try {
    const content = await Content.findOne({ _id: req.params.id });
    res.send(content);
  } catch (error) {
    res.status(404);
    res.send({ error: "content with specified id doesn't exist" });
  }
});

// update content
router.route("/:id").put(async (req, res) => {
  const updatedContent = {
    _id: req.params.id,
    stringifiedPage: req.body.stringifiedPage,
  };
  const contentQuery = await Content.findOneAndUpdate();
  await contentQuery.save();
  res.send(updatedContent);
});

// delete content
router.route("/:id").delete(async (req, res) => {
  await Content.findByIdAndRemove({
    _id: req.params.id,
  });
  res.send({ id: req.params.id });
});

module.exports = router;
