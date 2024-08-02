// Creating routes
// First step: Importing express and express router
const express = require("express");
// Creating our router
const router = express.Router();

// GET router for all weapons
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Weapons fetching GET request",
  });
});

// router for GET request for singlular weapon
router.get("/:weaponId", (req, res, next) => {
  // creating a weapon id variable
  const id = req.params.weaponId;

  res.status(200).json({
    message: "Singlular weapon details GET request",
    weapon_Id: req.params.weaponId,
  });
});

// router for POST request to add new weapons
router.post("/", (req, res, next) => {
  // Creating the weapon object's body
  const weapon = {
    // Extracting request body properties
    name: req.body.name,
    description: req.body.description,
  };
  res.status(201).json({
    message: "New weapon created! Weapon POST handling",
    new_weapon: weapon,
  });
});

// router for DELETE request
router.delete("/:weaponId", (req, res, next) => {
  // creating a weapon id variable
  const id = req.params.weaponId;

  res.status(200).json({
    message: "Weapon deleted",
    weapon_Id: req.params.weaponId,
  });
});
module.exports = router;
