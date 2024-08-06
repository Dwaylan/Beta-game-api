const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("using NEW api route for attacks ");
});

module.exports = router;
