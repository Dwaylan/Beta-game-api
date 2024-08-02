// Creating routes
// First step: Importing express and express router
const express = require("express");
// Creating our router
const router = express.Router();

// GET router for all characters
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Character fetching GET request",
  });
});

// router for GET request for singlular character
router.get("/:characterId", (req, res, next) => {
  // creating a weapon id variable
  const id = req.params.characterId;

  res.status(200).json({
    message: "Singlular character details GET request",
    character_Id: req.params.characterId,
  });
});

router.post("/", (req, res, next) => {
  // router for POST request to add new characters
  // Creating the character object's body
  const character = {
    // Extracting request body properties
    name: req.body.name,
    description: req.body.description,
    gender: req.body.gender,
    affinity: req.body.affinity,
    HP: req.body.HP,
    MP: req.body.MP,
    skills: req.body.skills,
  };
  res.status(201).json({
    message: "New character created! Weapon POST handling",
    new_character: character,
  });
});

// router for DELETE request
router.delete("/:characterId", (req, res, next) => {
  // creating a character id variable
  const id = req.params.characterId;

  res.status(200).json({
    message: "Weapon deleted",
    character_Id: req.params.characterId,
  });
});
module.exports = router;
