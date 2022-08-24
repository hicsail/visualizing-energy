(express = require("express")), (router = express.Router());

const UNKNOWN_ERROR = "Internal server error";

//health check
router.route("/").get(async (req, res) => {
  try {
    res.send({ status: "ok" });
  } catch (error) {
    res.status(500);
    res.send({ error: UNKNOWN_ERROR });
  }
});

module.exports = router;
