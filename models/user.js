const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
