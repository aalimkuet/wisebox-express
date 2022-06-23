var express = require("express");
var router = express.Router();

/* GET home page. */
// router.get("/", (req, res, next) => {
//   res.render("index", { title: "Express" });
// });

const t = { name: "Mahin", path: "IT People ltd" };

router.get("/", (req, res, next) => {
  res.send(t);
});

module.exports = router;
