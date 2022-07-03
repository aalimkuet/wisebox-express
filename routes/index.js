var express = require("express");
var router = express.Router();
var Country = require("../models/country");

/* GET home page. */
// router.get("/", (req, res, next) => {
//   res.render("index", { title: "Express" });
// });

const t = { name: "Mahin", path: "IT People ltd" };

router.get("/", (req, res, next) => {
  res.send(t);
});

/* GET Country list. */

router.get("/get_country", async (req, res) => {
  try {
    const countryList = await Country.find({});
    console.log(countryList);
    res.json(countryList);
  } catch (err) {
    res.send({ message: err.message });
  }
});

module.exports = router;
