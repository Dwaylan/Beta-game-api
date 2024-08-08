const mongoose = require("mongoose");

// Creating schemas, or database templates for how characters should be added and received
const characterSchema = mongoose.Schema({
  // Defining our object types within the schema
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  affinity: String,
  HP: Number,
  MP: Number,
});

module.exports = mongoose.model("Character", characterSchema);
