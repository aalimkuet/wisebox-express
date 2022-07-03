const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Country",
  mongoose.Schema({
    name: String,
    dial_code: String,
    code: String,
  })
);

// module.exports = mongoose.model(
//   "Company",
//   mongoose.Schema({
//     name: String,
//   })
// );
