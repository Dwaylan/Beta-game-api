// Creating routes
// First step: Importing express and express router
const express = require("express");
// Creating our router
const router = express.Router();

// Creating the route to the attacks with the GET method and the path is passed as an argument
// and a handler function is passed as the second argument.
// We are say that at the "/" path the handler function needs to be executed
router.get("/", (req, res, next) => {
  // If successful, respond with the okay status (200) and a JSON string message
  res.status(200).json({
    message: "Attack GET handling",
  });
});

// router for POST request
router.post("/", (req, res, next) => {
  // Creating the attack object's body
  const attack = {
    // Extracting request body properties
    name: req.body.name,
    description: req.body.description,
    MP: req.body.MP,
  };
  // If successful, respond with the okay status (200) and a JSON string message
  res.status(200).json({
    message: "Attack created! Attack POST handling",
    new_attack: attack,
  });
});

// router for GET request for single attacks
// In express ":" is the variable needed to add specificity
router.get("/:attackId", (req, res, next) => {
  // Extracting the attack id parameter
  const id = req.params.attackId;

  if (id === "special") {
    res.status(200).json({
      message: "Signature attacks",
      attack_id: id,
    });
  } else {
    // If successful, respond with the okay status (200) and a JSON string message
    res.status(200).json({
      message: "Singular Attack id GET handling",
      attack_id: id,
    });
  }
});

router.patch("/:attackId", (req, res, next) => {
  res.status(200).json({
    message: "Updating attack database via PATCH",
  });
});

router.delete("/:attackId", (req, res, next) => {
  res.status(200).json({
    message: "Deleting from to attack database via PATCH",
  });
});

module.exports = router;
