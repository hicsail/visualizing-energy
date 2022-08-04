(express = require("express")), (router = express.Router());

const Content = require("../models/Content");
const {verifyWriteAccess} = require("../utils");

//TODO ensure routes fail gracefully. 
//decide what happens when null is returned. 
//check payload health for write ops
//use try catch for "unamed errors"

// create content
router.route("/").post(verifyWriteAccess, async (req, res) => {
    const content = new Content({
      stringifiedPage: req.body.stringifiedPage,
    });
    await content.save();
    res.send({ id: content._id });
});

//read all ids
router.route("/ids").get(async (req, res) => {
  //return empty array if no ids found
  var contentIds = []
  contentIds = await  Content.find({program: {$in: ["_id"]}})
      .distinct('_id')
  res.send(contentIds);
});

// read content
router.route("/:id").get(async (req, res) => {
  try {
    const content = await Content.findOne({ _id: req.params.id });
    res.send(content);
  } catch (error) {
    res.status(404); //consider other codes for null and error
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
