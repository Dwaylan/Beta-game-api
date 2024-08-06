// Creating routes
// First step: Importing express and express router
const express = require("express");
// Creating our router
const router = express.Router();

const mongoose = require("mongoose");

// Importing our characters schema
const Character = require("../models/characters");

// GET router for all characters
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Character fetching GET request",
  });
});

// router for GET request for singlular character via ID
router.get("/:characterId", (req, res, next) => {
  // creating a weapon id variable
  const id = req.params.characterId;

  Character.findById(id)
    .exec()
    .then(() => {
      console.log("Successful retrieval");
      res.status(200).json({
        message: "Singlular character details GET request",
        character_Id: req.params.characterId,
        name: req.body.name,
        description: req.body.description,
        gender: req.body.gender,
        affinity: req.body.affinity,
        HP: req.body.HP,
        MP: req.body.MP,
        skills: req.body.skills,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// ** To Do: Get Characters by Name **

router.post("/", (req, res, next) => {
  // router for POST request to add new characters

  // Creating a new character constructor for storage
  const character = new Character({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    gender: req.body.gender,
    affinity: req.body.affinity,
    HP: req.body.HP,
    MP: req.body.MP,
    skills: req.body.skills,
  });
  // Saving the newly constructed character
  character
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(201).json({
    message: "New character created! Character POST handling",
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
